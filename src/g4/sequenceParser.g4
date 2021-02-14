parser grammar sequenceParser;

options {
  tokenVocab = sequenceLexer;
}

prog
 : EOF                            // An empty string is a valid prog
// | LT EOF                       // Parser auto recover from this
 | head EOF
 | head? block EOF
 ;

head
 : (group | participant)+
 | (group | participant)* starterExp
 ;

// The following order is important.
// It ensures group { A } will not be parsed as group + anonymouseBlock.
// It seems that we should always put the longest rule at the top.
group
 : GROUP name? OBRACE participant* CBRACE
 | GROUP name? OBRACE
 | GROUP name?
 ;

starterExp
 : AT STARTER_LXR OPAR starter CPAR
 | AT STARTER_LXR OPAR CPAR
 | AT STARTER_LXR OPAR
 | AT STARTER_LXR
 | AT ID
 | AT
 ;

starter
 : ID
 ;

participant
 : stereotype? name width? label?
 | stereotype
 ;

stereotype
 : SOPEN name SCLOSE
 | SOPEN name
 | SOPEN name GT
 | SOPEN GT         // Some people may write <<>> first then put in the interface name
 | SOPEN SCLOSE
 | SOPEN
 | LT
 ;

label
 : AS name
 | AS
 ;

name
 : (ID | STRING)
 ;

width
 : INT
 ;

// [Perf tuning] changed from stat* to stat+ according to
// https://tomassetti.me/improving-the-performance-of-an-antlr-parser/
// This change however does not improve the perf.
block
 : stat+
 ;

ret
 : RETURN value SCOL?
 | RETURN value
 | RETURN
 ;

value
 : (atom | ID | STRING)
 ;

stat
 : alt
 | par
 | opt
 | loop
 | creation
 | message
 // Without 'EVENT_END' the change line char cannot match anything and results error
 // This change line is lexed as EVENT_END because it was in Event_Mode
 | asyncMessage EVENT_END?
 | anonymousBlock
 | ret
 | OTHER {console.log("unknown char: " + $OTHER.text);}
 ;

par
 : PAR braceBlock
 | PAR
 ;

opt
 : OPT braceBlock
 | OPT
 ;

anonymousBlock
 : braceBlock
 ;

creation
 : creationBody (SCOL | braceBlock)?
 ;

// [Perf tuning] By removing alternative rules
// the performence improves by 1/3 (2.1s -> 1.4s).
// This means 'a = new' will be treated as error.
// [Incomplete code] The following incomplete input
// can be 'correctly'(with correct errors) parsed:
// new
// a = new
// new A(
creationBody
 : assignment? NEW construct(OPAR parameters? CPAR)?
 ;

message
 : messageBody (SCOL | braceBlock)?
 ;

messageBody
 : assignment? func
 | assignment
 ;

// [Perf tuning] Performance improved 30% after we removed other
// alternative rules (1.3s -> 1.0s). It would improve another 30%,
// if we remove the 'to DOT', but that would cause issues for 'A.'.
func
 : ((from ARROW)? (to DOT))? signature (DOT signature)*
 | to DOT
 ;

from
 : ID
 ;

signature
 : methodName invocation?
 ;

invocation
 : OPAR
 | OPAR parameters? CPAR
 ;

assignment
 : (type? assignee ASSIGN)
 ;

// [Perf tuning] The following alternative rules does cause perf issue.
// See the 'Profiling async message' test.
asyncMessage
 : source ARROW target COL content
 | source ARROW target COL
 | target COL content
 | source ARROW target
 | source MINUS
 ;

content
 : EVENT_PAYLOAD_LXR
 ;

source
 : ID
 ;

target
 : ID | STRING
 ;

construct
 : ID | STRING
 ;

type
 : ID
 ;

assignee
 : (ID (COMMA ID)*) | STRING
 ;

to
 : ID | STRING
 ;

methodName
 : ID | STRING
 ;

parameters
 : parameter (COMMA parameter)*
 ;

parameter
 : declaration | ID | atom | expr | creation
 ;

declaration
 : type ID
 ;

alt
 : ifBlock elseIfBlock* elseBlock?
 ;

ifBlock
 : IF parExpr braceBlock
 ;

elseIfBlock
 : ELSE IF parExpr braceBlock
 ;

elseBlock
 : ELSE braceBlock
 ;

braceBlock
 : OBRACE block? CBRACE
 ;

loop
 : WHILE parExpr braceBlock
 | WHILE parExpr
 | WHILE
 ;

// [Perf tuning] Merging expr op expr does not help.
// Removing `func` and `creation` could improve by 5 ~ 10%, but we cannot do that.
expr
 : MINUS expr                           #unaryMinusExpr
 | NOT expr                             #notExpr
 | expr op=(MULT | DIV | MOD) expr      #multiplicationExpr
 | expr op=(PLUS | MINUS) expr          #additiveExpr
 | expr op=(LTEQ | GTEQ | LT | GT) expr #relationalExpr
 | expr op=(EQ | NEQ) expr              #equalityExpr
 | expr AND expr                        #andExpr
 | expr OR expr                         #orExpr
 | expr PLUS expr                       #plusExpr
 | func                                 #funcExpr
 | creation                             #creationExpr
 | atom                                 #atomExpr
 ;

// [Perf tuniing] Merging below tokens does not help.
atom
 : (INT | FLOAT)  #numberAtom
 | (TRUE | FALSE) #booleanAtom
 | ID             #idAtom
 | STRING         #stringAtom
 | NIL            #nilAtom
 ;

parExpr
 : OPAR condition CPAR
 | OPAR condition
 | OPAR CPAR
 | OPAR
 ;

condition
 : atom
 | expr
 ;

