// Generated from sequenceParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sequenceParserListener = require('./sequenceParserListener').sequenceParserListener;
var grammarFileName = "sequenceParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u01dd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002d\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002i\n\u0002\u0003\u0003\u0003\u0003\u0006\u0003",
    "m\n\u0003\r\u0003\u000e\u0003n\u0003\u0003\u0003\u0003\u0007\u0003s",
    "\n\u0003\f\u0003\u000e\u0003v\u000b\u0003\u0003\u0003\u0005\u0003y\n",
    "\u0003\u0003\u0004\u0003\u0004\u0005\u0004}\n\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004\u0081\n\u0004\f\u0004\u000e\u0004\u0084\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0089\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u008e\n\u0004\u0005\u0004",
    "\u0090\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0095",
    "\n\u0005\u0003\u0005\u0005\u0005\u0098\n\u0005\u0003\u0005\u0005\u0005",
    "\u009b\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0005\u0007\u00a0",
    "\n\u0007\u0003\u0007\u0005\u0007\u00a3\n\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007\u00a7\n\u0007\u0003\u0007\u0005\u0007\u00aa\n\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u00ae\n\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00b7\n\b\u0003\b\u0003\b\u0005",
    "\b\u00bb\n\b\u0005\b\u00bd\n\b\u0003\t\u0003\t\u0003\t\u0005\t\u00c2",
    "\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r",
    "\u0006\r\u00cb\n\r\r\r\u000e\r\u00cc\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u00d1\n\u000e\u0003\u000e\u0005\u000e\u00d4\n\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00d9\n\u000e\u0005\u000e\u00db\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00e9\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00ef\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00f4\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00f9\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u00fe\n\u0013\u0003\u0014\u0005\u0014\u0101\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0107\n\u0014\u0003\u0014",
    "\u0005\u0014\u010a\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u010f\n\u0015\u0003\u0016\u0005\u0016\u0112\n\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u0117\n\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u011c\n\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0123\n\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0128\n\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0007\u0017\u012d\n\u0017\f\u0017\u000e\u0017",
    "\u0130\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u0138\n\u001a\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u013c\n\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0005",
    "\u001c\u0141\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0005\u001d\u014f\n\u001d\u0005\u001d\u0151",
    "\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003!\u0003!\u0007!\u015d\n!\f!\u000e!\u0160\u000b",
    "!\u0003!\u0005!\u0163\n!\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0007",
    "#\u016a\n#\f#\u000e#\u016d\u000b#\u0003#\u0005#\u0170\n#\u0003$\u0003",
    "$\u0005$\u0174\n$\u0003%\u0003%\u0003%\u0003&\u0003&\u0007&\u017b\n",
    "&\f&\u000e&\u017e\u000b&\u0003&\u0005&\u0181\n&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003",
    "*\u0003*\u0005*\u0191\n*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0005+\u019c\n+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0005,\u01a6\n,\u0003,\u0003,\u0003,\u0005,\u01ab\n",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0007,\u01c2\n,\f,\u000e,\u01c5\u000b,\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0005-\u01cc\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0005.\u01d7\n.\u0003/\u0003/\u0005/\u01db\n",
    "/\u0003/\u0002\u0003V0\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0002",
    "\f\u0004\u0002--00\u0004\u0002\u0004\u0004\f\f\u0004\u0002\u0005\u0005",
    "\u000b\u000b\u0004\u0002\u0006\u0006\u0010\u0010\u0003\u0002\u0011\u0013",
    "\u0003\u0002\u000f\u0010\u0003\u0002\u000b\u000e\u0003\u0002\t\n\u0003",
    "\u0002./\u0003\u0002\u001d\u001e\u0002\u020d\u0002h\u0003\u0002\u0002",
    "\u0002\u0004x\u0003\u0002\u0002\u0002\u0006\u008f\u0003\u0002\u0002",
    "\u0002\b\u009a\u0003\u0002\u0002\u0002\n\u009c\u0003\u0002\u0002\u0002",
    "\f\u00ad\u0003\u0002\u0002\u0002\u000e\u00bc\u0003\u0002\u0002\u0002",
    "\u0010\u00c1\u0003\u0002\u0002\u0002\u0012\u00c3\u0003\u0002\u0002\u0002",
    "\u0014\u00c5\u0003\u0002\u0002\u0002\u0016\u00c7\u0003\u0002\u0002\u0002",
    "\u0018\u00ca\u0003\u0002\u0002\u0002\u001a\u00da\u0003\u0002\u0002\u0002",
    "\u001c\u00dc\u0003\u0002\u0002\u0002\u001e\u00ee\u0003\u0002\u0002\u0002",
    " \u00f3\u0003\u0002\u0002\u0002\"\u00f8\u0003\u0002\u0002\u0002$\u00fa",
    "\u0003\u0002\u0002\u0002&\u0100\u0003\u0002\u0002\u0002(\u010b\u0003",
    "\u0002\u0002\u0002*\u0127\u0003\u0002\u0002\u0002,\u0129\u0003\u0002",
    "\u0002\u0002.\u0131\u0003\u0002\u0002\u00020\u0133\u0003\u0002\u0002",
    "\u00022\u0135\u0003\u0002\u0002\u00024\u0139\u0003\u0002\u0002\u0002",
    "6\u0140\u0003\u0002\u0002\u00028\u0150\u0003\u0002\u0002\u0002:\u0152",
    "\u0003\u0002\u0002\u0002<\u0154\u0003\u0002\u0002\u0002>\u0156\u0003",
    "\u0002\u0002\u0002@\u0162\u0003\u0002\u0002\u0002B\u0164\u0003\u0002",
    "\u0002\u0002D\u0166\u0003\u0002\u0002\u0002F\u0173\u0003\u0002\u0002",
    "\u0002H\u0175\u0003\u0002\u0002\u0002J\u0178\u0003\u0002\u0002\u0002",
    "L\u0182\u0003\u0002\u0002\u0002N\u0186\u0003\u0002\u0002\u0002P\u018b",
    "\u0003\u0002\u0002\u0002R\u018e\u0003\u0002\u0002\u0002T\u019b\u0003",
    "\u0002\u0002\u0002V\u01aa\u0003\u0002\u0002\u0002X\u01cb\u0003\u0002",
    "\u0002\u0002Z\u01d6\u0003\u0002\u0002\u0002\\\u01da\u0003\u0002\u0002",
    "\u0002^i\u0007\u0002\u0002\u0003_`\u0005\u0004\u0003\u0002`a\u0007\u0002",
    "\u0002\u0003ai\u0003\u0002\u0002\u0002bd\u0005\u0004\u0003\u0002cb\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002",
    "ef\u0005\u0018\r\u0002fg\u0007\u0002\u0002\u0003gi\u0003\u0002\u0002",
    "\u0002h^\u0003\u0002\u0002\u0002h_\u0003\u0002\u0002\u0002hc\u0003\u0002",
    "\u0002\u0002i\u0003\u0003\u0002\u0002\u0002jm\u0005\u0006\u0004\u0002",
    "km\u0005\f\u0007\u0002lj\u0003\u0002\u0002\u0002lk\u0003\u0002\u0002",
    "\u0002mn\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002",
    "\u0002\u0002oy\u0003\u0002\u0002\u0002ps\u0005\u0006\u0004\u0002qs\u0005",
    "\f\u0007\u0002rp\u0003\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002s",
    "v\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wy\u0005\b",
    "\u0005\u0002xl\u0003\u0002\u0002\u0002xt\u0003\u0002\u0002\u0002y\u0005",
    "\u0003\u0002\u0002\u0002z|\u0007&\u0002\u0002{}\u0005\u0014\u000b\u0002",
    "|{\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002",
    "\u0002~\u0082\u0007\u001b\u0002\u0002\u007f\u0081\u0005\f\u0007\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002",
    "\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002",
    "\u0083\u0085\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002",
    "\u0085\u0090\u0007\u001c\u0002\u0002\u0086\u0088\u0007&\u0002\u0002",
    "\u0087\u0089\u0005\u0014\u000b\u0002\u0088\u0087\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u0090\u0007\u001b\u0002\u0002\u008b\u008d\u0007&\u0002\u0002",
    "\u008c\u008e\u0005\u0014\u000b\u0002\u008d\u008c\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0003\u0002\u0002\u0002",
    "\u008fz\u0003\u0002\u0002\u0002\u008f\u0086\u0003\u0002\u0002\u0002",
    "\u008f\u008b\u0003\u0002\u0002\u0002\u0090\u0007\u0003\u0002\u0002\u0002",
    "\u0091\u0097\u0007)\u0002\u0002\u0092\u0094\u0007\u0019\u0002\u0002",
    "\u0093\u0095\u0005\n\u0006\u0002\u0094\u0093\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002",
    "\u0096\u0098\u0007\u001a\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002",
    "\u0099\u009b\u0007+\u0002\u0002\u009a\u0091\u0003\u0002\u0002\u0002",
    "\u009a\u0099\u0003\u0002\u0002\u0002\u009b\t\u0003\u0002\u0002\u0002",
    "\u009c\u009d\t\u0002\u0002\u0002\u009d\u000b\u0003\u0002\u0002\u0002",
    "\u009e\u00a0\u0005\u0012\n\u0002\u009f\u009e\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002",
    "\u00a1\u00a3\u0005\u000e\b\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002",
    "\u00a4\u00a6\u0005\u0014\u000b\u0002\u00a5\u00a7\u0005\u0016\f\u0002",
    "\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002",
    "\u00a7\u00a9\u0003\u0002\u0002\u0002\u00a8\u00aa\u0005\u0010\t\u0002",
    "\u00a9\u00a8\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00ae\u0003\u0002\u0002\u0002\u00ab\u00ae\u0005\u000e\b\u0002",
    "\u00ac\u00ae\u0005\u0012\n\u0002\u00ad\u009f\u0003\u0002\u0002\u0002",
    "\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002",
    "\u00ae\r\u0003\u0002\u0002\u0002\u00af\u00b0\u0007\u0004\u0002\u0002",
    "\u00b0\u00b1\u0005\u0014\u000b\u0002\u00b1\u00b2\u0007\u0005\u0002\u0002",
    "\u00b2\u00bd\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u0004\u0002\u0002",
    "\u00b4\u00b6\u0005\u0014\u000b\u0002\u00b5\u00b7\u0007\u000b\u0002\u0002",
    "\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002",
    "\u00b7\u00bd\u0003\u0002\u0002\u0002\u00b8\u00ba\t\u0003\u0002\u0002",
    "\u00b9\u00bb\t\u0004\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002",
    "\u00bc\u00af\u0003\u0002\u0002\u0002\u00bc\u00b3\u0003\u0002\u0002\u0002",
    "\u00bc\u00b8\u0003\u0002\u0002\u0002\u00bd\u000f\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0007(\u0002\u0002\u00bf\u00c2\u0005\u0014\u000b\u0002",
    "\u00c0\u00c2\u0007(\u0002\u0002\u00c1\u00be\u0003\u0002\u0002\u0002",
    "\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2\u0011\u0003\u0002\u0002\u0002",
    "\u00c3\u00c4\u0007+\u0002\u0002\u00c4\u0013\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\t\u0002\u0002\u0002\u00c6\u0015\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0007.\u0002\u0002\u00c8\u0017\u0003\u0002\u0002\u0002",
    "\u00c9\u00cb\u0005\u001e\u0010\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u0019\u0003\u0002\u0002\u0002",
    "\u00ce\u00d0\u0007#\u0002\u0002\u00cf\u00d1\u0005V,\u0002\u00d0\u00cf",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3",
    "\u0003\u0002\u0002\u0002\u00d2\u00d4\u0007\u0016\u0002\u0002\u00d3\u00d2",
    "\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00db",
    "\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007*\u0002\u0002\u00d6\u00d8",
    "\u00058\u001d\u0002\u00d7\u00d9\u00076\u0002\u0002\u00d8\u00d7\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00db\u0003",
    "\u0002\u0002\u0002\u00da\u00ce\u0003\u0002\u0002\u0002\u00da\u00d5\u0003",
    "\u0002\u0002\u0002\u00db\u001b\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007",
    "\t\u0002\u0002\u00dd\u00de\u0005\u0014\u000b\u0002\u00de\u00df\u0007",
    "\t\u0002\u0002\u00df\u001d\u0003\u0002\u0002\u0002\u00e0\u00ef\u0005",
    "J&\u0002\u00e1\u00ef\u0005 \u0011\u0002\u00e2\u00ef\u0005\"\u0012\u0002",
    "\u00e3\u00ef\u0005T+\u0002\u00e4\u00ef\u0005$\u0013\u0002\u00e5\u00ef",
    "\u0005(\u0015\u0002\u00e6\u00e8\u00058\u001d\u0002\u00e7\u00e9\u0007",
    "6\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003",
    "\u0002\u0002\u0002\u00e9\u00ef\u0003\u0002\u0002\u0002\u00ea\u00ef\u0005",
    "\u001a\u000e\u0002\u00eb\u00ef\u0005\u001c\u000f\u0002\u00ec\u00ed\u0007",
    "4\u0002\u0002\u00ed\u00ef\b\u0010\u0001\u0002\u00ee\u00e0\u0003\u0002",
    "\u0002\u0002\u00ee\u00e1\u0003\u0002\u0002\u0002\u00ee\u00e2\u0003\u0002",
    "\u0002\u0002\u00ee\u00e3\u0003\u0002\u0002\u0002\u00ee\u00e4\u0003\u0002",
    "\u0002\u0002\u00ee\u00e5\u0003\u0002\u0002\u0002\u00ee\u00e6\u0003\u0002",
    "\u0002\u0002\u00ee\u00ea\u0003\u0002\u0002\u0002\u00ee\u00eb\u0003\u0002",
    "\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u001f\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007%\u0002\u0002\u00f1\u00f4\u0005R*\u0002",
    "\u00f2\u00f4\u0007%\u0002\u0002\u00f3\u00f0\u0003\u0002\u0002\u0002",
    "\u00f3\u00f2\u0003\u0002\u0002\u0002\u00f4!\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0007\'\u0002\u0002\u00f6\u00f9\u0005R*\u0002\u00f7\u00f9",
    "\u0007\'\u0002\u0002\u00f8\u00f5\u0003\u0002\u0002\u0002\u00f8\u00f7",
    "\u0003\u0002\u0002\u0002\u00f9#\u0003\u0002\u0002\u0002\u00fa\u00fd",
    "\u0005&\u0014\u0002\u00fb\u00fe\u0007\u0016\u0002\u0002\u00fc\u00fe",
    "\u0005R*\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fc\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe%\u0003",
    "\u0002\u0002\u0002\u00ff\u0101\u00056\u001c\u0002\u0100\u00ff\u0003",
    "\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102\u0103\u0007$\u0002\u0002\u0103\u0109\u0005",
    "<\u001f\u0002\u0104\u0106\u0007\u0019\u0002\u0002\u0105\u0107\u0005",
    "D#\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u010a\u0007\u001a",
    "\u0002\u0002\u0109\u0104\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002",
    "\u0002\u0002\u010a\'\u0003\u0002\u0002\u0002\u010b\u010e\u0005*\u0016",
    "\u0002\u010c\u010f\u0007\u0016\u0002\u0002\u010d\u010f\u0005R*\u0002",
    "\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002",
    "\u010e\u010f\u0003\u0002\u0002\u0002\u010f)\u0003\u0002\u0002\u0002",
    "\u0110\u0112\u00056\u001c\u0002\u0111\u0110\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u011b\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0005.\u0018\u0002\u0114\u0115\u0007\u0006\u0002\u0002",
    "\u0115\u0117\u0003\u0002\u0002\u0002\u0116\u0113\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002",
    "\u0118\u0119\u00050\u0019\u0002\u0119\u011a\u0007,\u0002\u0002\u011a",
    "\u011c\u0003\u0002\u0002\u0002\u011b\u0116\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d",
    "\u0128\u0005,\u0017\u0002\u011e\u0128\u00056\u001c\u0002\u011f\u0120",
    "\u0005.\u0018\u0002\u0120\u0121\u0007\u0006\u0002\u0002\u0121\u0123",
    "\u0003\u0002\u0002\u0002\u0122\u011f\u0003\u0002\u0002\u0002\u0122\u0123",
    "\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0125",
    "\u00050\u0019\u0002\u0125\u0126\u0007,\u0002\u0002\u0126\u0128\u0003",
    "\u0002\u0002\u0002\u0127\u0111\u0003\u0002\u0002\u0002\u0127\u011e\u0003",
    "\u0002\u0002\u0002\u0127\u0122\u0003\u0002\u0002\u0002\u0128+\u0003",
    "\u0002\u0002\u0002\u0129\u012e\u00052\u001a\u0002\u012a\u012b\u0007",
    ",\u0002\u0002\u012b\u012d\u00052\u001a\u0002\u012c\u012a\u0003\u0002",
    "\u0002\u0002\u012d\u0130\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002",
    "\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f-\u0003\u0002",
    "\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0131\u0132\t\u0002",
    "\u0002\u0002\u0132/\u0003\u0002\u0002\u0002\u0133\u0134\t\u0002\u0002",
    "\u0002\u01341\u0003\u0002\u0002\u0002\u0135\u0137\u0005B\"\u0002\u0136",
    "\u0138\u00054\u001b\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0137",
    "\u0138\u0003\u0002\u0002\u0002\u01383\u0003\u0002\u0002\u0002\u0139",
    "\u013b\u0007\u0019\u0002\u0002\u013a\u013c\u0005D#\u0002\u013b\u013a",
    "\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013d",
    "\u0003\u0002\u0002\u0002\u013d\u013e\u0007\u001a\u0002\u0002\u013e5",
    "\u0003\u0002\u0002\u0002\u013f\u0141\u0005> \u0002\u0140\u013f\u0003",
    "\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u0142\u0003",
    "\u0002\u0002\u0002\u0142\u0143\u0005@!\u0002\u0143\u0144\u0007\u0018",
    "\u0002\u0002\u01447\u0003\u0002\u0002\u0002\u0145\u0146\u0005.\u0018",
    "\u0002\u0146\u0147\u0007\u0006\u0002\u0002\u0147\u0148\u00050\u0019",
    "\u0002\u0148\u0149\u0007\u0003\u0002\u0002\u0149\u014a\u0005:\u001e",
    "\u0002\u014a\u0151\u0003\u0002\u0002\u0002\u014b\u014c\u0005.\u0018",
    "\u0002\u014c\u014e\t\u0005\u0002\u0002\u014d\u014f\u00050\u0019\u0002",
    "\u014e\u014d\u0003\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002",
    "\u014f\u0151\u0003\u0002\u0002\u0002\u0150\u0145\u0003\u0002\u0002\u0002",
    "\u0150\u014b\u0003\u0002\u0002\u0002\u01519\u0003\u0002\u0002\u0002",
    "\u0152\u0153\u00075\u0002\u0002\u0153;\u0003\u0002\u0002\u0002\u0154",
    "\u0155\t\u0002\u0002\u0002\u0155=\u0003\u0002\u0002\u0002\u0156\u0157",
    "\t\u0002\u0002\u0002\u0157?\u0003\u0002\u0002\u0002\u0158\u0163\u0005",
    "X-\u0002\u0159\u015e\u0007-\u0002\u0002\u015a\u015b\u0007\u0017\u0002",
    "\u0002\u015b\u015d\u0007-\u0002\u0002\u015c\u015a\u0003\u0002\u0002",
    "\u0002\u015d\u0160\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0163\u0003\u0002\u0002",
    "\u0002\u0160\u015e\u0003\u0002\u0002\u0002\u0161\u0163\u00070\u0002",
    "\u0002\u0162\u0158\u0003\u0002\u0002\u0002\u0162\u0159\u0003\u0002\u0002",
    "\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163A\u0003\u0002\u0002",
    "\u0002\u0164\u0165\t\u0002\u0002\u0002\u0165C\u0003\u0002\u0002\u0002",
    "\u0166\u016b\u0005F$\u0002\u0167\u0168\u0007\u0017\u0002\u0002\u0168",
    "\u016a\u0005F$\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u016a\u016d",
    "\u0003\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002\u0002\u016b\u016c",
    "\u0003\u0002\u0002\u0002\u016c\u016f\u0003\u0002\u0002\u0002\u016d\u016b",
    "\u0003\u0002\u0002\u0002\u016e\u0170\u0007\u0017\u0002\u0002\u016f\u016e",
    "\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170E",
    "\u0003\u0002\u0002\u0002\u0171\u0174\u0005H%\u0002\u0172\u0174\u0005",
    "V,\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0172\u0003\u0002",
    "\u0002\u0002\u0174G\u0003\u0002\u0002\u0002\u0175\u0176\u0005> \u0002",
    "\u0176\u0177\u0007-\u0002\u0002\u0177I\u0003\u0002\u0002\u0002\u0178",
    "\u017c\u0005L\'\u0002\u0179\u017b\u0005N(\u0002\u017a\u0179\u0003\u0002",
    "\u0002\u0002\u017b\u017e\u0003\u0002\u0002\u0002\u017c\u017a\u0003\u0002",
    "\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u0180\u0003\u0002",
    "\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0181\u0005P",
    ")\u0002\u0180\u017f\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002",
    "\u0002\u0002\u0181K\u0003\u0002\u0002\u0002\u0182\u0183\u0007 \u0002",
    "\u0002\u0183\u0184\u0005Z.\u0002\u0184\u0185\u0005R*\u0002\u0185M\u0003",
    "\u0002\u0002\u0002\u0186\u0187\u0007!\u0002\u0002\u0187\u0188\u0007",
    " \u0002\u0002\u0188\u0189\u0005Z.\u0002\u0189\u018a\u0005R*\u0002\u018a",
    "O\u0003\u0002\u0002\u0002\u018b\u018c\u0007!\u0002\u0002\u018c\u018d",
    "\u0005R*\u0002\u018dQ\u0003\u0002\u0002\u0002\u018e\u0190\u0007\u001b",
    "\u0002\u0002\u018f\u0191\u0005\u0018\r\u0002\u0190\u018f\u0003\u0002",
    "\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002",
    "\u0002\u0002\u0192\u0193\u0007\u001c\u0002\u0002\u0193S\u0003\u0002",
    "\u0002\u0002\u0194\u0195\u0007\"\u0002\u0002\u0195\u0196\u0005Z.\u0002",
    "\u0196\u0197\u0005R*\u0002\u0197\u019c\u0003\u0002\u0002\u0002\u0198",
    "\u0199\u0007\"\u0002\u0002\u0199\u019c\u0005Z.\u0002\u019a\u019c\u0007",
    "\"\u0002\u0002\u019b\u0194\u0003\u0002\u0002\u0002\u019b\u0198\u0003",
    "\u0002\u0002\u0002\u019b\u019a\u0003\u0002\u0002\u0002\u019cU\u0003",
    "\u0002\u0002\u0002\u019d\u019e\b,\u0001\u0002\u019e\u019f\u0007\u0010",
    "\u0002\u0002\u019f\u01ab\u0005V,\u000e\u01a0\u01a1\u0007\u0015\u0002",
    "\u0002\u01a1\u01ab\u0005V,\r\u01a2\u01a3\u00050\u0019\u0002\u01a3\u01a4",
    "\u0007,\u0002\u0002\u01a4\u01a6\u0003\u0002\u0002\u0002\u01a5\u01a2",
    "\u0003\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a7",
    "\u0003\u0002\u0002\u0002\u01a7\u01ab\u0005,\u0017\u0002\u01a8\u01ab",
    "\u0005$\u0013\u0002\u01a9\u01ab\u0005X-\u0002\u01aa\u019d\u0003\u0002",
    "\u0002\u0002\u01aa\u01a0\u0003\u0002\u0002\u0002\u01aa\u01a5\u0003\u0002",
    "\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01aa\u01a9\u0003\u0002",
    "\u0002\u0002\u01ab\u01c3\u0003\u0002\u0002\u0002\u01ac\u01ad\f\f\u0002",
    "\u0002\u01ad\u01ae\t\u0006\u0002\u0002\u01ae\u01c2\u0005V,\r\u01af\u01b0",
    "\f\u000b\u0002\u0002\u01b0\u01b1\t\u0007\u0002\u0002\u01b1\u01c2\u0005",
    "V,\f\u01b2\u01b3\f\n\u0002\u0002\u01b3\u01b4\t\b\u0002\u0002\u01b4\u01c2",
    "\u0005V,\u000b\u01b5\u01b6\f\t\u0002\u0002\u01b6\u01b7\t\t\u0002\u0002",
    "\u01b7\u01c2\u0005V,\n\u01b8\u01b9\f\b\u0002\u0002\u01b9\u01ba\u0007",
    "\b\u0002\u0002\u01ba\u01c2\u0005V,\t\u01bb\u01bc\f\u0007\u0002\u0002",
    "\u01bc\u01bd\u0007\u0007\u0002\u0002\u01bd\u01c2\u0005V,\b\u01be\u01bf",
    "\f\u0006\u0002\u0002\u01bf\u01c0\u0007\u000f\u0002\u0002\u01c0\u01c2",
    "\u0005V,\u0007\u01c1\u01ac\u0003\u0002\u0002\u0002\u01c1\u01af\u0003",
    "\u0002\u0002\u0002\u01c1\u01b2\u0003\u0002\u0002\u0002\u01c1\u01b5\u0003",
    "\u0002\u0002\u0002\u01c1\u01b8\u0003\u0002\u0002\u0002\u01c1\u01bb\u0003",
    "\u0002\u0002\u0002\u01c1\u01be\u0003\u0002\u0002\u0002\u01c2\u01c5\u0003",
    "\u0002\u0002\u0002\u01c3\u01c1\u0003\u0002\u0002\u0002\u01c3\u01c4\u0003",
    "\u0002\u0002\u0002\u01c4W\u0003\u0002\u0002\u0002\u01c5\u01c3\u0003",
    "\u0002\u0002\u0002\u01c6\u01cc\t\n\u0002\u0002\u01c7\u01cc\t\u000b\u0002",
    "\u0002\u01c8\u01cc\u0007-\u0002\u0002\u01c9\u01cc\u00070\u0002\u0002",
    "\u01ca\u01cc\u0007\u001f\u0002\u0002\u01cb\u01c6\u0003\u0002\u0002\u0002",
    "\u01cb\u01c7\u0003\u0002\u0002\u0002\u01cb\u01c8\u0003\u0002\u0002\u0002",
    "\u01cb\u01c9\u0003\u0002\u0002\u0002\u01cb\u01ca\u0003\u0002\u0002\u0002",
    "\u01ccY\u0003\u0002\u0002\u0002\u01cd\u01ce\u0007\u0019\u0002\u0002",
    "\u01ce\u01cf\u0005\\/\u0002\u01cf\u01d0\u0007\u001a\u0002\u0002\u01d0",
    "\u01d7\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007\u0019\u0002\u0002\u01d2",
    "\u01d7\u0005\\/\u0002\u01d3\u01d4\u0007\u0019\u0002\u0002\u01d4\u01d7",
    "\u0007\u001a\u0002\u0002\u01d5\u01d7\u0007\u0019\u0002\u0002\u01d6\u01cd",
    "\u0003\u0002\u0002\u0002\u01d6\u01d1\u0003\u0002\u0002\u0002\u01d6\u01d3",
    "\u0003\u0002\u0002\u0002\u01d6\u01d5\u0003\u0002\u0002\u0002\u01d7[",
    "\u0003\u0002\u0002\u0002\u01d8\u01db\u0005X-\u0002\u01d9\u01db\u0005",
    "V,\u0002\u01da\u01d8\u0003\u0002\u0002\u0002\u01da\u01d9\u0003\u0002",
    "\u0002\u0002\u01db]\u0003\u0002\u0002\u0002Cchlnrtx|\u0082\u0088\u008d",
    "\u008f\u0094\u0097\u009a\u009f\u00a2\u00a6\u00a9\u00ad\u00b6\u00ba\u00bc",
    "\u00c1\u00cc\u00d0\u00d3\u00d8\u00da\u00e8\u00ee\u00f3\u00f8\u00fd\u0100",
    "\u0106\u0109\u010e\u0111\u0116\u011b\u0122\u0127\u012e\u0137\u013b\u0140",
    "\u014e\u0150\u015e\u0162\u016b\u016f\u0173\u017c\u0180\u0190\u019b\u01a5",
    "\u01aa\u01c1\u01c3\u01cb\u01d6\u01da"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'<<'", "'>>'", "'->'", "'||'", "'&&'", 
                     "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'^'", "'!'", "';'", "','", 
                     "'='", "'('", "')'", "'{'", "'}'", "'true'", "'false'", 
                     "'nil'", "'if'", "'else'", null, "'return'", "'new'", 
                     "'par'", "'group'", "'opt'", "'as'", null, null, null, 
                     "'.'" ];

var symbolicNames = [ null, "COL", "SOPEN", "SCLOSE", "ARROW", "OR", "AND", 
                      "EQ", "NEQ", "GT", "LT", "GTEQ", "LTEQ", "PLUS", "MINUS", 
                      "MULT", "DIV", "MOD", "POW", "NOT", "SCOL", "COMMA", 
                      "ASSIGN", "OPAR", "CPAR", "OBRACE", "CBRACE", "TRUE", 
                      "FALSE", "NIL", "IF", "ELSE", "WHILE", "RETURN", "NEW", 
                      "PAR", "GROUP", "OPT", "AS", "STARTER_LXR", "ANNOTATION_RET", 
                      "ANNOTATION", "DOT", "ID", "INT", "FLOAT", "STRING", 
                      "CR", "SPACE", "COMMENT", "OTHER", "EVENT_PAYLOAD_LXR", 
                      "EVENT_END", "WS" ];

var ruleNames =  [ "prog", "head", "group", "starterExp", "starter", "participant", 
                   "stereotype", "label", "participantType", "name", "width", 
                   "block", "ret", "divider", "stat", "par", "opt", "creation", 
                   "creationBody", "message", "messageBody", "func", "from", 
                   "to", "signature", "invocation", "assignment", "asyncMessage", 
                   "content", "construct", "type", "assignee", "methodName", 
                   "parameters", "parameter", "declaration", "alt", "ifBlock", 
                   "elseIfBlock", "elseBlock", "braceBlock", "loop", "expr", 
                   "atom", "parExpr", "condition" ];

function sequenceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sequenceParser.prototype = Object.create(antlr4.Parser.prototype);
sequenceParser.prototype.constructor = sequenceParser;

Object.defineProperty(sequenceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sequenceParser.EOF = antlr4.Token.EOF;
sequenceParser.COL = 1;
sequenceParser.SOPEN = 2;
sequenceParser.SCLOSE = 3;
sequenceParser.ARROW = 4;
sequenceParser.OR = 5;
sequenceParser.AND = 6;
sequenceParser.EQ = 7;
sequenceParser.NEQ = 8;
sequenceParser.GT = 9;
sequenceParser.LT = 10;
sequenceParser.GTEQ = 11;
sequenceParser.LTEQ = 12;
sequenceParser.PLUS = 13;
sequenceParser.MINUS = 14;
sequenceParser.MULT = 15;
sequenceParser.DIV = 16;
sequenceParser.MOD = 17;
sequenceParser.POW = 18;
sequenceParser.NOT = 19;
sequenceParser.SCOL = 20;
sequenceParser.COMMA = 21;
sequenceParser.ASSIGN = 22;
sequenceParser.OPAR = 23;
sequenceParser.CPAR = 24;
sequenceParser.OBRACE = 25;
sequenceParser.CBRACE = 26;
sequenceParser.TRUE = 27;
sequenceParser.FALSE = 28;
sequenceParser.NIL = 29;
sequenceParser.IF = 30;
sequenceParser.ELSE = 31;
sequenceParser.WHILE = 32;
sequenceParser.RETURN = 33;
sequenceParser.NEW = 34;
sequenceParser.PAR = 35;
sequenceParser.GROUP = 36;
sequenceParser.OPT = 37;
sequenceParser.AS = 38;
sequenceParser.STARTER_LXR = 39;
sequenceParser.ANNOTATION_RET = 40;
sequenceParser.ANNOTATION = 41;
sequenceParser.DOT = 42;
sequenceParser.ID = 43;
sequenceParser.INT = 44;
sequenceParser.FLOAT = 45;
sequenceParser.STRING = 46;
sequenceParser.CR = 47;
sequenceParser.SPACE = 48;
sequenceParser.COMMENT = 49;
sequenceParser.OTHER = 50;
sequenceParser.EVENT_PAYLOAD_LXR = 51;
sequenceParser.EVENT_END = 52;
sequenceParser.WS = 53;

sequenceParser.RULE_prog = 0;
sequenceParser.RULE_head = 1;
sequenceParser.RULE_group = 2;
sequenceParser.RULE_starterExp = 3;
sequenceParser.RULE_starter = 4;
sequenceParser.RULE_participant = 5;
sequenceParser.RULE_stereotype = 6;
sequenceParser.RULE_label = 7;
sequenceParser.RULE_participantType = 8;
sequenceParser.RULE_name = 9;
sequenceParser.RULE_width = 10;
sequenceParser.RULE_block = 11;
sequenceParser.RULE_ret = 12;
sequenceParser.RULE_divider = 13;
sequenceParser.RULE_stat = 14;
sequenceParser.RULE_par = 15;
sequenceParser.RULE_opt = 16;
sequenceParser.RULE_creation = 17;
sequenceParser.RULE_creationBody = 18;
sequenceParser.RULE_message = 19;
sequenceParser.RULE_messageBody = 20;
sequenceParser.RULE_func = 21;
sequenceParser.RULE_from = 22;
sequenceParser.RULE_to = 23;
sequenceParser.RULE_signature = 24;
sequenceParser.RULE_invocation = 25;
sequenceParser.RULE_assignment = 26;
sequenceParser.RULE_asyncMessage = 27;
sequenceParser.RULE_content = 28;
sequenceParser.RULE_construct = 29;
sequenceParser.RULE_type = 30;
sequenceParser.RULE_assignee = 31;
sequenceParser.RULE_methodName = 32;
sequenceParser.RULE_parameters = 33;
sequenceParser.RULE_parameter = 34;
sequenceParser.RULE_declaration = 35;
sequenceParser.RULE_alt = 36;
sequenceParser.RULE_ifBlock = 37;
sequenceParser.RULE_elseIfBlock = 38;
sequenceParser.RULE_elseBlock = 39;
sequenceParser.RULE_braceBlock = 40;
sequenceParser.RULE_loop = 41;
sequenceParser.RULE_expr = 42;
sequenceParser.RULE_atom = 43;
sequenceParser.RULE_parExpr = 44;
sequenceParser.RULE_condition = 45;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(sequenceParser.EOF, 0);
};

ProgContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

ProgContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitProg(this);
	}
};




sequenceParser.ProgContext = ProgContext;

sequenceParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sequenceParser.RULE_prog);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.match(sequenceParser.EOF);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.head();
            this.state = 94;
            this.match(sequenceParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 97;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            if(la_===1) {
                this.state = 96;
                this.head();

            }
            this.state = 99;
            this.block();
            this.state = 100;
            this.match(sequenceParser.EOF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_head;
    return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupContext);
    } else {
        return this.getTypedRuleContext(GroupContext,i);
    }
};

HeadContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

HeadContext.prototype.starterExp = function() {
    return this.getTypedRuleContext(StarterExpContext,0);
};

HeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterHead(this);
	}
};

HeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitHead(this);
	}
};




sequenceParser.HeadContext = HeadContext;

sequenceParser.prototype.head = function() {

    var localctx = new HeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sequenceParser.RULE_head);
    try {
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 106; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 106;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case sequenceParser.GROUP:
            		    this.state = 104;
            		    this.group();
            		    break;
            		case sequenceParser.SOPEN:
            		case sequenceParser.LT:
            		case sequenceParser.ANNOTATION:
            		case sequenceParser.ID:
            		case sequenceParser.STRING:
            		    this.state = 105;
            		    this.participant();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 108; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 112;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case sequenceParser.GROUP:
                        this.state = 110;
                        this.group();
                        break;
                    case sequenceParser.SOPEN:
                    case sequenceParser.LT:
                    case sequenceParser.ANNOTATION:
                    case sequenceParser.ID:
                    case sequenceParser.STRING:
                        this.state = 111;
                        this.participant();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    } 
                }
                this.state = 116;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
            }

            this.state = 117;
            this.starterExp();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.GROUP = function() {
    return this.getToken(sequenceParser.GROUP, 0);
};

GroupContext.prototype.OBRACE = function() {
    return this.getToken(sequenceParser.OBRACE, 0);
};

GroupContext.prototype.CBRACE = function() {
    return this.getToken(sequenceParser.CBRACE, 0);
};

GroupContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

GroupContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitGroup(this);
	}
};




sequenceParser.GroupContext = GroupContext;

sequenceParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sequenceParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.match(sequenceParser.GROUP);
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 121;
                this.name();
            }

            this.state = 124;
            this.match(sequenceParser.OBRACE);
            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.SOPEN || _la===sequenceParser.LT || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (sequenceParser.ANNOTATION - 41)) | (1 << (sequenceParser.ID - 41)) | (1 << (sequenceParser.STRING - 41)))) !== 0)) {
                this.state = 125;
                this.participant();
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 131;
            this.match(sequenceParser.CBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(sequenceParser.GROUP);
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 133;
                this.name();
            }

            this.state = 136;
            this.match(sequenceParser.OBRACE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 137;
            this.match(sequenceParser.GROUP);
            this.state = 139;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 138;
                this.name();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StarterExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_starterExp;
    return this;
}

StarterExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StarterExpContext.prototype.constructor = StarterExpContext;

StarterExpContext.prototype.STARTER_LXR = function() {
    return this.getToken(sequenceParser.STARTER_LXR, 0);
};

StarterExpContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

StarterExpContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

StarterExpContext.prototype.starter = function() {
    return this.getTypedRuleContext(StarterContext,0);
};

StarterExpContext.prototype.ANNOTATION = function() {
    return this.getToken(sequenceParser.ANNOTATION, 0);
};

StarterExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStarterExp(this);
	}
};

StarterExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStarterExp(this);
	}
};




sequenceParser.StarterExpContext = StarterExpContext;

sequenceParser.prototype.starterExp = function() {

    var localctx = new StarterExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sequenceParser.RULE_starterExp);
    var _la = 0; // Token type
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.STARTER_LXR:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.match(sequenceParser.STARTER_LXR);
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.OPAR) {
                this.state = 144;
                this.match(sequenceParser.OPAR);
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                    this.state = 145;
                    this.starter();
                }

                this.state = 148;
                this.match(sequenceParser.CPAR);
            }

            break;
        case sequenceParser.ANNOTATION:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.match(sequenceParser.ANNOTATION);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StarterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_starter;
    return this;
}

StarterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StarterContext.prototype.constructor = StarterContext;

StarterContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

StarterContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

StarterContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStarter(this);
	}
};

StarterContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStarter(this);
	}
};




sequenceParser.StarterContext = StarterContext;

sequenceParser.prototype.starter = function() {

    var localctx = new StarterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sequenceParser.RULE_starter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_participant;
    return this;
}

ParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantContext.prototype.constructor = ParticipantContext;

ParticipantContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ParticipantContext.prototype.participantType = function() {
    return this.getTypedRuleContext(ParticipantTypeContext,0);
};

ParticipantContext.prototype.stereotype = function() {
    return this.getTypedRuleContext(StereotypeContext,0);
};

ParticipantContext.prototype.width = function() {
    return this.getTypedRuleContext(WidthContext,0);
};

ParticipantContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParticipant(this);
	}
};

ParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParticipant(this);
	}
};




sequenceParser.ParticipantContext = ParticipantContext;

sequenceParser.prototype.participant = function() {

    var localctx = new ParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sequenceParser.RULE_participant);
    var _la = 0; // Token type
    try {
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ANNOTATION) {
                this.state = 156;
                this.participantType();
            }

            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SOPEN || _la===sequenceParser.LT) {
                this.state = 159;
                this.stereotype();
            }

            this.state = 162;
            this.name();
            this.state = 164;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 163;
                this.width();

            }
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.AS) {
                this.state = 166;
                this.label();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.stereotype();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 170;
            this.participantType();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StereotypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_stereotype;
    return this;
}

StereotypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StereotypeContext.prototype.constructor = StereotypeContext;

StereotypeContext.prototype.SOPEN = function() {
    return this.getToken(sequenceParser.SOPEN, 0);
};

StereotypeContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

StereotypeContext.prototype.SCLOSE = function() {
    return this.getToken(sequenceParser.SCLOSE, 0);
};

StereotypeContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};

StereotypeContext.prototype.LT = function() {
    return this.getToken(sequenceParser.LT, 0);
};

StereotypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStereotype(this);
	}
};

StereotypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStereotype(this);
	}
};




sequenceParser.StereotypeContext = StereotypeContext;

sequenceParser.prototype.stereotype = function() {

    var localctx = new StereotypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sequenceParser.RULE_stereotype);
    var _la = 0; // Token type
    try {
        this.state = 186;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.match(sequenceParser.SOPEN);
            this.state = 174;
            this.name();
            this.state = 175;
            this.match(sequenceParser.SCLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 177;
            this.match(sequenceParser.SOPEN);
            this.state = 178;
            this.name();
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.GT) {
                this.state = 179;
                this.match(sequenceParser.GT);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 182;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.SOPEN || _la===sequenceParser.LT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SCLOSE || _la===sequenceParser.GT) {
                this.state = 183;
                _la = this._input.LA(1);
                if(!(_la===sequenceParser.SCLOSE || _la===sequenceParser.GT)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.AS = function() {
    return this.getToken(sequenceParser.AS, 0);
};

LabelContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitLabel(this);
	}
};




sequenceParser.LabelContext = LabelContext;

sequenceParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, sequenceParser.RULE_label);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.match(sequenceParser.AS);
            this.state = 189;
            this.name();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(sequenceParser.AS);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParticipantTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_participantType;
    return this;
}

ParticipantTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantTypeContext.prototype.constructor = ParticipantTypeContext;

ParticipantTypeContext.prototype.ANNOTATION = function() {
    return this.getToken(sequenceParser.ANNOTATION, 0);
};

ParticipantTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParticipantType(this);
	}
};

ParticipantTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParticipantType(this);
	}
};




sequenceParser.ParticipantTypeContext = ParticipantTypeContext;

sequenceParser.prototype.participantType = function() {

    var localctx = new ParticipantTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sequenceParser.RULE_participantType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(sequenceParser.ANNOTATION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

NameContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitName(this);
	}
};




sequenceParser.NameContext = NameContext;

sequenceParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, sequenceParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WidthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_width;
    return this;
}

WidthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WidthContext.prototype.constructor = WidthContext;

WidthContext.prototype.INT = function() {
    return this.getToken(sequenceParser.INT, 0);
};

WidthContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterWidth(this);
	}
};

WidthContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitWidth(this);
	}
};




sequenceParser.WidthContext = WidthContext;

sequenceParser.prototype.width = function() {

    var localctx = new WidthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, sequenceParser.RULE_width);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(sequenceParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBlock(this);
	}
};




sequenceParser.BlockContext = BlockContext;

sequenceParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, sequenceParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 199;
            this.stat();
            this.state = 202; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.EQ) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL) | (1 << sequenceParser.IF))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.WHILE - 32)) | (1 << (sequenceParser.RETURN - 32)) | (1 << (sequenceParser.NEW - 32)) | (1 << (sequenceParser.PAR - 32)) | (1 << (sequenceParser.OPT - 32)) | (1 << (sequenceParser.ANNOTATION_RET - 32)) | (1 << (sequenceParser.ID - 32)) | (1 << (sequenceParser.INT - 32)) | (1 << (sequenceParser.FLOAT - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.OTHER - 32)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_ret;
    return this;
}

RetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetContext.prototype.constructor = RetContext;

RetContext.prototype.RETURN = function() {
    return this.getToken(sequenceParser.RETURN, 0);
};

RetContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

RetContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

RetContext.prototype.ANNOTATION_RET = function() {
    return this.getToken(sequenceParser.ANNOTATION_RET, 0);
};

RetContext.prototype.asyncMessage = function() {
    return this.getTypedRuleContext(AsyncMessageContext,0);
};

RetContext.prototype.EVENT_END = function() {
    return this.getToken(sequenceParser.EVENT_END, 0);
};

RetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterRet(this);
	}
};

RetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitRet(this);
	}
};




sequenceParser.RetContext = RetContext;

sequenceParser.prototype.ret = function() {

    var localctx = new RetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, sequenceParser.RULE_ret);
    var _la = 0; // Token type
    try {
        this.state = 216;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 204;
            this.match(sequenceParser.RETURN);
            this.state = 206;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
            if(la_===1) {
                this.state = 205;
                this.expr(0);

            }
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SCOL) {
                this.state = 208;
                this.match(sequenceParser.SCOL);
            }

            break;
        case sequenceParser.ANNOTATION_RET:
            this.enterOuterAlt(localctx, 2);
            this.state = 211;
            this.match(sequenceParser.ANNOTATION_RET);
            this.state = 212;
            this.asyncMessage();
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.EVENT_END) {
                this.state = 213;
                this.match(sequenceParser.EVENT_END);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DividerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_divider;
    return this;
}

DividerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DividerContext.prototype.constructor = DividerContext;

DividerContext.prototype.EQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.EQ);
    } else {
        return this.getToken(sequenceParser.EQ, i);
    }
};


DividerContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

DividerContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterDivider(this);
	}
};

DividerContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitDivider(this);
	}
};




sequenceParser.DividerContext = DividerContext;

sequenceParser.prototype.divider = function() {

    var localctx = new DividerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, sequenceParser.RULE_divider);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(sequenceParser.EQ);
        this.state = 219;
        this.name();
        this.state = 220;
        this.match(sequenceParser.EQ);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_stat;
    this._OTHER = null; // Token
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.alt = function() {
    return this.getTypedRuleContext(AltContext,0);
};

StatContext.prototype.par = function() {
    return this.getTypedRuleContext(ParContext,0);
};

StatContext.prototype.opt = function() {
    return this.getTypedRuleContext(OptContext,0);
};

StatContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StatContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};

StatContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

StatContext.prototype.asyncMessage = function() {
    return this.getTypedRuleContext(AsyncMessageContext,0);
};

StatContext.prototype.EVENT_END = function() {
    return this.getToken(sequenceParser.EVENT_END, 0);
};

StatContext.prototype.ret = function() {
    return this.getTypedRuleContext(RetContext,0);
};

StatContext.prototype.divider = function() {
    return this.getTypedRuleContext(DividerContext,0);
};

StatContext.prototype.OTHER = function() {
    return this.getToken(sequenceParser.OTHER, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStat(this);
	}
};




sequenceParser.StatContext = StatContext;

sequenceParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, sequenceParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 236;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 222;
            this.alt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 223;
            this.par();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 224;
            this.opt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 225;
            this.loop();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 226;
            this.creation();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 227;
            this.message();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 228;
            this.asyncMessage();
            this.state = 230;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.EVENT_END) {
                this.state = 229;
                this.match(sequenceParser.EVENT_END);
            }

            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 232;
            this.ret();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 233;
            this.divider();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 234;
            localctx._OTHER = this.match(sequenceParser.OTHER);
            console.log("unknown char: " + (localctx._OTHER===null ? null : localctx._OTHER.text));
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_par;
    return this;
}

ParContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParContext.prototype.constructor = ParContext;

ParContext.prototype.PAR = function() {
    return this.getToken(sequenceParser.PAR, 0);
};

ParContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ParContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterPar(this);
	}
};

ParContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitPar(this);
	}
};




sequenceParser.ParContext = ParContext;

sequenceParser.prototype.par = function() {

    var localctx = new ParContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, sequenceParser.RULE_par);
    try {
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 238;
            this.match(sequenceParser.PAR);
            this.state = 239;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 240;
            this.match(sequenceParser.PAR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_opt;
    return this;
}

OptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptContext.prototype.constructor = OptContext;

OptContext.prototype.OPT = function() {
    return this.getToken(sequenceParser.OPT, 0);
};

OptContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

OptContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterOpt(this);
	}
};

OptContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitOpt(this);
	}
};




sequenceParser.OptContext = OptContext;

sequenceParser.prototype.opt = function() {

    var localctx = new OptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, sequenceParser.RULE_opt);
    try {
        this.state = 246;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.match(sequenceParser.OPT);
            this.state = 244;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(sequenceParser.OPT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_creation;
    return this;
}

CreationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreationContext.prototype.constructor = CreationContext;

CreationContext.prototype.creationBody = function() {
    return this.getTypedRuleContext(CreationBodyContext,0);
};

CreationContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

CreationContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

CreationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreation(this);
	}
};

CreationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreation(this);
	}
};




sequenceParser.CreationContext = CreationContext;

sequenceParser.prototype.creation = function() {

    var localctx = new CreationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, sequenceParser.RULE_creation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.creationBody();
        this.state = 251;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        if(la_===1) {
            this.state = 249;
            this.match(sequenceParser.SCOL);

        } else if(la_===2) {
            this.state = 250;
            this.braceBlock();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreationBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_creationBody;
    return this;
}

CreationBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreationBodyContext.prototype.constructor = CreationBodyContext;

CreationBodyContext.prototype.NEW = function() {
    return this.getToken(sequenceParser.NEW, 0);
};

CreationBodyContext.prototype.construct = function() {
    return this.getTypedRuleContext(ConstructContext,0);
};

CreationBodyContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

CreationBodyContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

CreationBodyContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

CreationBodyContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

CreationBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreationBody(this);
	}
};

CreationBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreationBody(this);
	}
};




sequenceParser.CreationBodyContext = CreationBodyContext;

sequenceParser.prototype.creationBody = function() {

    var localctx = new CreationBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, sequenceParser.RULE_creationBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (sequenceParser.TRUE - 27)) | (1 << (sequenceParser.FALSE - 27)) | (1 << (sequenceParser.NIL - 27)) | (1 << (sequenceParser.ID - 27)) | (1 << (sequenceParser.INT - 27)) | (1 << (sequenceParser.FLOAT - 27)) | (1 << (sequenceParser.STRING - 27)))) !== 0)) {
            this.state = 253;
            this.assignment();
        }

        this.state = 256;
        this.match(sequenceParser.NEW);
        this.state = 257;
        this.construct();
        this.state = 263;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        if(la_===1) {
            this.state = 258;
            this.match(sequenceParser.OPAR);
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MINUS) | (1 << sequenceParser.NOT) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (sequenceParser.NEW - 34)) | (1 << (sequenceParser.ID - 34)) | (1 << (sequenceParser.INT - 34)) | (1 << (sequenceParser.FLOAT - 34)) | (1 << (sequenceParser.STRING - 34)))) !== 0)) {
                this.state = 259;
                this.parameters();
            }

            this.state = 262;
            this.match(sequenceParser.CPAR);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.messageBody = function() {
    return this.getTypedRuleContext(MessageBodyContext,0);
};

MessageContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

MessageContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMessage(this);
	}
};




sequenceParser.MessageContext = MessageContext;

sequenceParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, sequenceParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.messageBody();
        this.state = 268;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case sequenceParser.SCOL:
        	this.state = 266;
        	this.match(sequenceParser.SCOL);
        	break;
        case sequenceParser.OBRACE:
        	this.state = 267;
        	this.braceBlock();
        	break;
        case sequenceParser.EOF:
        case sequenceParser.EQ:
        case sequenceParser.CBRACE:
        case sequenceParser.TRUE:
        case sequenceParser.FALSE:
        case sequenceParser.NIL:
        case sequenceParser.IF:
        case sequenceParser.WHILE:
        case sequenceParser.RETURN:
        case sequenceParser.NEW:
        case sequenceParser.PAR:
        case sequenceParser.OPT:
        case sequenceParser.ANNOTATION_RET:
        case sequenceParser.ID:
        case sequenceParser.INT:
        case sequenceParser.FLOAT:
        case sequenceParser.STRING:
        case sequenceParser.OTHER:
        	break;
        default:
        	break;
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MessageBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_messageBody;
    return this;
}

MessageBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageBodyContext.prototype.constructor = MessageBodyContext;

MessageBodyContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

MessageBodyContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

MessageBodyContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

MessageBodyContext.prototype.DOT = function() {
    return this.getToken(sequenceParser.DOT, 0);
};

MessageBodyContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

MessageBodyContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

MessageBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMessageBody(this);
	}
};

MessageBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMessageBody(this);
	}
};




sequenceParser.MessageBodyContext = MessageBodyContext;

sequenceParser.prototype.messageBody = function() {

    var localctx = new MessageBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, sequenceParser.RULE_messageBody);
    try {
        this.state = 293;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 271;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
            if(la_===1) {
                this.state = 270;
                this.assignment();

            }
            this.state = 281;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
            if(la_===1) {
                this.state = 276;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
                if(la_===1) {
                    this.state = 273;
                    this.from();
                    this.state = 274;
                    this.match(sequenceParser.ARROW);

                }
                this.state = 278;
                this.to();
                this.state = 279;
                this.match(sequenceParser.DOT);

            }
            this.state = 283;
            this.func();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 284;
            this.assignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 288;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
            if(la_===1) {
                this.state = 285;
                this.from();
                this.state = 286;
                this.match(sequenceParser.ARROW);

            }
            this.state = 290;
            this.to();
            this.state = 291;
            this.match(sequenceParser.DOT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.signature = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignatureContext);
    } else {
        return this.getTypedRuleContext(SignatureContext,i);
    }
};

FuncContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.DOT);
    } else {
        return this.getToken(sequenceParser.DOT, i);
    }
};


FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFunc(this);
	}
};




sequenceParser.FuncContext = FuncContext;

sequenceParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, sequenceParser.RULE_func);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.signature();
        this.state = 300;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 296;
                this.match(sequenceParser.DOT);
                this.state = 297;
                this.signature(); 
            }
            this.state = 302;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_from;
    return this;
}

FromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromContext.prototype.constructor = FromContext;

FromContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

FromContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

FromContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFrom(this);
	}
};

FromContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFrom(this);
	}
};




sequenceParser.FromContext = FromContext;

sequenceParser.prototype.from = function() {

    var localctx = new FromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, sequenceParser.RULE_from);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ToContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_to;
    return this;
}

ToContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToContext.prototype.constructor = ToContext;

ToContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ToContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

ToContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTo(this);
	}
};

ToContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTo(this);
	}
};




sequenceParser.ToContext = ToContext;

sequenceParser.prototype.to = function() {

    var localctx = new ToContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, sequenceParser.RULE_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_signature;
    return this;
}

SignatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignatureContext.prototype.constructor = SignatureContext;

SignatureContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

SignatureContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

SignatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterSignature(this);
	}
};

SignatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitSignature(this);
	}
};




sequenceParser.SignatureContext = SignatureContext;

sequenceParser.prototype.signature = function() {

    var localctx = new SignatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, sequenceParser.RULE_signature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.methodName();
        this.state = 309;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        if(la_===1) {
            this.state = 308;
            this.invocation();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

InvocationContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

InvocationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitInvocation(this);
	}
};




sequenceParser.InvocationContext = InvocationContext;

sequenceParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, sequenceParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(sequenceParser.OPAR);
        this.state = 313;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MINUS) | (1 << sequenceParser.NOT) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (sequenceParser.NEW - 34)) | (1 << (sequenceParser.ID - 34)) | (1 << (sequenceParser.INT - 34)) | (1 << (sequenceParser.FLOAT - 34)) | (1 << (sequenceParser.STRING - 34)))) !== 0)) {
            this.state = 312;
            this.parameters();
        }

        this.state = 315;
        this.match(sequenceParser.CPAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.assignee = function() {
    return this.getTypedRuleContext(AssigneeContext,0);
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(sequenceParser.ASSIGN, 0);
};

AssignmentContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignment(this);
	}
};




sequenceParser.AssignmentContext = AssignmentContext;

sequenceParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, sequenceParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        if(la_===1) {
            this.state = 317;
            this.type();

        }
        this.state = 320;
        this.assignee();
        this.state = 321;
        this.match(sequenceParser.ASSIGN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AsyncMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_asyncMessage;
    return this;
}

AsyncMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AsyncMessageContext.prototype.constructor = AsyncMessageContext;

AsyncMessageContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

AsyncMessageContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

AsyncMessageContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

AsyncMessageContext.prototype.COL = function() {
    return this.getToken(sequenceParser.COL, 0);
};

AsyncMessageContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

AsyncMessageContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};

AsyncMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAsyncMessage(this);
	}
};

AsyncMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAsyncMessage(this);
	}
};




sequenceParser.AsyncMessageContext = AsyncMessageContext;

sequenceParser.prototype.asyncMessage = function() {

    var localctx = new AsyncMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, sequenceParser.RULE_asyncMessage);
    var _la = 0; // Token type
    try {
        this.state = 334;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 323;
            this.from();
            this.state = 324;
            this.match(sequenceParser.ARROW);
            this.state = 325;
            this.to();
            this.state = 326;
            this.match(sequenceParser.COL);
            this.state = 327;
            this.content();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 329;
            this.from();
            this.state = 330;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.ARROW || _la===sequenceParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 332;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
            if(la_===1) {
                this.state = 331;
                this.to();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.EVENT_PAYLOAD_LXR = function() {
    return this.getToken(sequenceParser.EVENT_PAYLOAD_LXR, 0);
};

ContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterContent(this);
	}
};

ContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitContent(this);
	}
};




sequenceParser.ContentContext = ContentContext;

sequenceParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, sequenceParser.RULE_content);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(sequenceParser.EVENT_PAYLOAD_LXR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_construct;
    return this;
}

ConstructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructContext.prototype.constructor = ConstructContext;

ConstructContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ConstructContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

ConstructContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterConstruct(this);
	}
};

ConstructContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitConstruct(this);
	}
};




sequenceParser.ConstructContext = ConstructContext;

sequenceParser.prototype.construct = function() {

    var localctx = new ConstructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, sequenceParser.RULE_construct);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

TypeContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitType(this);
	}
};




sequenceParser.TypeContext = TypeContext;

sequenceParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, sequenceParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssigneeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_assignee;
    return this;
}

AssigneeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssigneeContext.prototype.constructor = AssigneeContext;

AssigneeContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

AssigneeContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.ID);
    } else {
        return this.getToken(sequenceParser.ID, i);
    }
};


AssigneeContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.COMMA);
    } else {
        return this.getToken(sequenceParser.COMMA, i);
    }
};


AssigneeContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

AssigneeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignee(this);
	}
};

AssigneeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignee(this);
	}
};




sequenceParser.AssigneeContext = AssigneeContext;

sequenceParser.prototype.assignee = function() {

    var localctx = new AssigneeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, sequenceParser.RULE_assignee);
    var _la = 0; // Token type
    try {
        this.state = 352;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 342;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 343;
            this.match(sequenceParser.ID);
            this.state = 348;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.COMMA) {
                this.state = 344;
                this.match(sequenceParser.COMMA);
                this.state = 345;
                this.match(sequenceParser.ID);
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 351;
            this.match(sequenceParser.STRING);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;

MethodNameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

MethodNameContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

MethodNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMethodName(this);
	}
};

MethodNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMethodName(this);
	}
};




sequenceParser.MethodNameContext = MethodNameContext;

sequenceParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, sequenceParser.RULE_methodName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.COMMA);
    } else {
        return this.getToken(sequenceParser.COMMA, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParameters(this);
	}
};




sequenceParser.ParametersContext = ParametersContext;

sequenceParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, sequenceParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.parameter();
        this.state = 361;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 357;
                this.match(sequenceParser.COMMA);
                this.state = 358;
                this.parameter(); 
            }
            this.state = 363;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
        }

        this.state = 365;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.COMMA) {
            this.state = 364;
            this.match(sequenceParser.COMMA);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

ParameterContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParameter(this);
	}
};




sequenceParser.ParameterContext = ParameterContext;

sequenceParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, sequenceParser.RULE_parameter);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 367;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 368;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitDeclaration(this);
	}
};




sequenceParser.DeclarationContext = DeclarationContext;

sequenceParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, sequenceParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.type();
        this.state = 372;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AltContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_alt;
    return this;
}

AltContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AltContext.prototype.constructor = AltContext;

AltContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

AltContext.prototype.elseIfBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfBlockContext);
    } else {
        return this.getTypedRuleContext(ElseIfBlockContext,i);
    }
};

AltContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

AltContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAlt(this);
	}
};

AltContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAlt(this);
	}
};




sequenceParser.AltContext = AltContext;

sequenceParser.prototype.alt = function() {

    var localctx = new AltContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, sequenceParser.RULE_alt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.ifBlock();
        this.state = 378;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,54,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 375;
                this.elseIfBlock(); 
            }
            this.state = 380;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,54,this._ctx);
        }

        this.state = 382;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.ELSE) {
            this.state = 381;
            this.elseBlock();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_ifBlock;
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.IF = function() {
    return this.getToken(sequenceParser.IF, 0);
};

IfBlockContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

IfBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitIfBlock(this);
	}
};




sequenceParser.IfBlockContext = IfBlockContext;

sequenceParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, sequenceParser.RULE_ifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(sequenceParser.IF);
        this.state = 385;
        this.parExpr();
        this.state = 386;
        this.braceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElseIfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_elseIfBlock;
    return this;
}

ElseIfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfBlockContext.prototype.constructor = ElseIfBlockContext;

ElseIfBlockContext.prototype.ELSE = function() {
    return this.getToken(sequenceParser.ELSE, 0);
};

ElseIfBlockContext.prototype.IF = function() {
    return this.getToken(sequenceParser.IF, 0);
};

ElseIfBlockContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

ElseIfBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ElseIfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterElseIfBlock(this);
	}
};

ElseIfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitElseIfBlock(this);
	}
};




sequenceParser.ElseIfBlockContext = ElseIfBlockContext;

sequenceParser.prototype.elseIfBlock = function() {

    var localctx = new ElseIfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, sequenceParser.RULE_elseIfBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(sequenceParser.ELSE);
        this.state = 389;
        this.match(sequenceParser.IF);
        this.state = 390;
        this.parExpr();
        this.state = 391;
        this.braceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.ELSE = function() {
    return this.getToken(sequenceParser.ELSE, 0);
};

ElseBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitElseBlock(this);
	}
};




sequenceParser.ElseBlockContext = ElseBlockContext;

sequenceParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, sequenceParser.RULE_elseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393;
        this.match(sequenceParser.ELSE);
        this.state = 394;
        this.braceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_braceBlock;
    return this;
}

BraceBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceBlockContext.prototype.constructor = BraceBlockContext;

BraceBlockContext.prototype.OBRACE = function() {
    return this.getToken(sequenceParser.OBRACE, 0);
};

BraceBlockContext.prototype.CBRACE = function() {
    return this.getToken(sequenceParser.CBRACE, 0);
};

BraceBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

BraceBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBraceBlock(this);
	}
};

BraceBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBraceBlock(this);
	}
};




sequenceParser.BraceBlockContext = BraceBlockContext;

sequenceParser.prototype.braceBlock = function() {

    var localctx = new BraceBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, sequenceParser.RULE_braceBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this.match(sequenceParser.OBRACE);
        this.state = 398;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.EQ) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL) | (1 << sequenceParser.IF))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.WHILE - 32)) | (1 << (sequenceParser.RETURN - 32)) | (1 << (sequenceParser.NEW - 32)) | (1 << (sequenceParser.PAR - 32)) | (1 << (sequenceParser.OPT - 32)) | (1 << (sequenceParser.ANNOTATION_RET - 32)) | (1 << (sequenceParser.ID - 32)) | (1 << (sequenceParser.INT - 32)) | (1 << (sequenceParser.FLOAT - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.OTHER - 32)))) !== 0)) {
            this.state = 397;
            this.block();
        }

        this.state = 400;
        this.match(sequenceParser.CBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(sequenceParser.WHILE, 0);
};

LoopContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

LoopContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitLoop(this);
	}
};




sequenceParser.LoopContext = LoopContext;

sequenceParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, sequenceParser.RULE_loop);
    try {
        this.state = 409;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 402;
            this.match(sequenceParser.WHILE);
            this.state = 403;
            this.parExpr();
            this.state = 404;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 406;
            this.match(sequenceParser.WHILE);
            this.state = 407;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 408;
            this.match(sequenceParser.WHILE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NotExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExprContext.prototype = Object.create(ExprContext.prototype);
NotExprContext.prototype.constructor = NotExprContext;

sequenceParser.NotExprContext = NotExprContext;

NotExprContext.prototype.NOT = function() {
    return this.getToken(sequenceParser.NOT, 0);
};

NotExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNotExpr(this);
	}
};

NotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNotExpr(this);
	}
};


function FuncExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncExprContext.prototype = Object.create(ExprContext.prototype);
FuncExprContext.prototype.constructor = FuncExprContext;

sequenceParser.FuncExprContext = FuncExprContext;

FuncExprContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

FuncExprContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

FuncExprContext.prototype.DOT = function() {
    return this.getToken(sequenceParser.DOT, 0);
};
FuncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFuncExpr(this);
	}
};

FuncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFuncExpr(this);
	}
};


function UnaryMinusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExprContext.prototype = Object.create(ExprContext.prototype);
UnaryMinusExprContext.prototype.constructor = UnaryMinusExprContext;

sequenceParser.UnaryMinusExprContext = UnaryMinusExprContext;

UnaryMinusExprContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};

UnaryMinusExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnaryMinusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterUnaryMinusExpr(this);
	}
};

UnaryMinusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitUnaryMinusExpr(this);
	}
};


function CreationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CreationExprContext.prototype = Object.create(ExprContext.prototype);
CreationExprContext.prototype.constructor = CreationExprContext;

sequenceParser.CreationExprContext = CreationExprContext;

CreationExprContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};
CreationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreationExpr(this);
	}
};

CreationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreationExpr(this);
	}
};


function MultiplicationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationExprContext.prototype = Object.create(ExprContext.prototype);
MultiplicationExprContext.prototype.constructor = MultiplicationExprContext;

sequenceParser.MultiplicationExprContext = MultiplicationExprContext;

MultiplicationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MultiplicationExprContext.prototype.MULT = function() {
    return this.getToken(sequenceParser.MULT, 0);
};

MultiplicationExprContext.prototype.DIV = function() {
    return this.getToken(sequenceParser.DIV, 0);
};

MultiplicationExprContext.prototype.MOD = function() {
    return this.getToken(sequenceParser.MOD, 0);
};
MultiplicationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMultiplicationExpr(this);
	}
};

MultiplicationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMultiplicationExpr(this);
	}
};


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

sequenceParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAtomExpr(this);
	}
};


function OrExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(ExprContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

sequenceParser.OrExprContext = OrExprContext;

OrExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

OrExprContext.prototype.OR = function() {
    return this.getToken(sequenceParser.OR, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitOrExpr(this);
	}
};


function AdditiveExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExprContext.prototype = Object.create(ExprContext.prototype);
AdditiveExprContext.prototype.constructor = AdditiveExprContext;

sequenceParser.AdditiveExprContext = AdditiveExprContext;

AdditiveExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AdditiveExprContext.prototype.PLUS = function() {
    return this.getToken(sequenceParser.PLUS, 0);
};

AdditiveExprContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};
AdditiveExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAdditiveExpr(this);
	}
};

AdditiveExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAdditiveExpr(this);
	}
};


function RelationalExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExprContext.prototype = Object.create(ExprContext.prototype);
RelationalExprContext.prototype.constructor = RelationalExprContext;

sequenceParser.RelationalExprContext = RelationalExprContext;

RelationalExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RelationalExprContext.prototype.LTEQ = function() {
    return this.getToken(sequenceParser.LTEQ, 0);
};

RelationalExprContext.prototype.GTEQ = function() {
    return this.getToken(sequenceParser.GTEQ, 0);
};

RelationalExprContext.prototype.LT = function() {
    return this.getToken(sequenceParser.LT, 0);
};

RelationalExprContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};
RelationalExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterRelationalExpr(this);
	}
};

RelationalExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitRelationalExpr(this);
	}
};


function EqualityExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExprContext.prototype = Object.create(ExprContext.prototype);
EqualityExprContext.prototype.constructor = EqualityExprContext;

sequenceParser.EqualityExprContext = EqualityExprContext;

EqualityExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

EqualityExprContext.prototype.EQ = function() {
    return this.getToken(sequenceParser.EQ, 0);
};

EqualityExprContext.prototype.NEQ = function() {
    return this.getToken(sequenceParser.NEQ, 0);
};
EqualityExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterEqualityExpr(this);
	}
};

EqualityExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitEqualityExpr(this);
	}
};


function PlusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusExprContext.prototype = Object.create(ExprContext.prototype);
PlusExprContext.prototype.constructor = PlusExprContext;

sequenceParser.PlusExprContext = PlusExprContext;

PlusExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

PlusExprContext.prototype.PLUS = function() {
    return this.getToken(sequenceParser.PLUS, 0);
};
PlusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterPlusExpr(this);
	}
};

PlusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitPlusExpr(this);
	}
};


function AndExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(ExprContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

sequenceParser.AndExprContext = AndExprContext;

AndExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AndExprContext.prototype.AND = function() {
    return this.getToken(sequenceParser.AND, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAndExpr(this);
	}
};



sequenceParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 84;
    this.enterRecursionRule(localctx, 84, sequenceParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 412;
            this.match(sequenceParser.MINUS);
            this.state = 413;
            this.expr(12);
            break;

        case 2:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 414;
            this.match(sequenceParser.NOT);
            this.state = 415;
            this.expr(11);
            break;

        case 3:
            localctx = new FuncExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 419;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
            if(la_===1) {
                this.state = 416;
                this.to();
                this.state = 417;
                this.match(sequenceParser.DOT);

            }
            this.state = 421;
            this.func();
            break;

        case 4:
            localctx = new CreationExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 422;
            this.creation();
            break;

        case 5:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 423;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 449;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 447;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 426;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 427;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MULT) | (1 << sequenceParser.DIV) | (1 << sequenceParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 428;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new AdditiveExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 429;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 430;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.PLUS || _la===sequenceParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 431;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 432;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 433;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.GT) | (1 << sequenceParser.LT) | (1 << sequenceParser.GTEQ) | (1 << sequenceParser.LTEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 434;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 435;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 436;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.EQ || _la===sequenceParser.NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 437;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 438;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 439;
                    this.match(sequenceParser.AND);
                    this.state = 440;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 441;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 442;
                    this.match(sequenceParser.OR);
                    this.state = 443;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new PlusExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 444;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 445;
                    this.match(sequenceParser.PLUS);
                    this.state = 446;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 451;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,61,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;


 
AtomContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BooleanAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanAtomContext.prototype = Object.create(AtomContext.prototype);
BooleanAtomContext.prototype.constructor = BooleanAtomContext;

sequenceParser.BooleanAtomContext = BooleanAtomContext;

BooleanAtomContext.prototype.TRUE = function() {
    return this.getToken(sequenceParser.TRUE, 0);
};

BooleanAtomContext.prototype.FALSE = function() {
    return this.getToken(sequenceParser.FALSE, 0);
};
BooleanAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBooleanAtom(this);
	}
};

BooleanAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBooleanAtom(this);
	}
};


function IdAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdAtomContext.prototype = Object.create(AtomContext.prototype);
IdAtomContext.prototype.constructor = IdAtomContext;

sequenceParser.IdAtomContext = IdAtomContext;

IdAtomContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};
IdAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterIdAtom(this);
	}
};

IdAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitIdAtom(this);
	}
};


function StringAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringAtomContext.prototype = Object.create(AtomContext.prototype);
StringAtomContext.prototype.constructor = StringAtomContext;

sequenceParser.StringAtomContext = StringAtomContext;

StringAtomContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};
StringAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStringAtom(this);
	}
};

StringAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStringAtom(this);
	}
};


function NilAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NilAtomContext.prototype = Object.create(AtomContext.prototype);
NilAtomContext.prototype.constructor = NilAtomContext;

sequenceParser.NilAtomContext = NilAtomContext;

NilAtomContext.prototype.NIL = function() {
    return this.getToken(sequenceParser.NIL, 0);
};
NilAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNilAtom(this);
	}
};

NilAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNilAtom(this);
	}
};


function NumberAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberAtomContext.prototype = Object.create(AtomContext.prototype);
NumberAtomContext.prototype.constructor = NumberAtomContext;

sequenceParser.NumberAtomContext = NumberAtomContext;

NumberAtomContext.prototype.INT = function() {
    return this.getToken(sequenceParser.INT, 0);
};

NumberAtomContext.prototype.FLOAT = function() {
    return this.getToken(sequenceParser.FLOAT, 0);
};
NumberAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNumberAtom(this);
	}
};

NumberAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNumberAtom(this);
	}
};



sequenceParser.AtomContext = AtomContext;

sequenceParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, sequenceParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 457;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.INT:
        case sequenceParser.FLOAT:
            localctx = new NumberAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 452;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.INT || _la===sequenceParser.FLOAT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sequenceParser.TRUE:
        case sequenceParser.FALSE:
            localctx = new BooleanAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 453;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.TRUE || _la===sequenceParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sequenceParser.ID:
            localctx = new IdAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 454;
            this.match(sequenceParser.ID);
            break;
        case sequenceParser.STRING:
            localctx = new StringAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 455;
            this.match(sequenceParser.STRING);
            break;
        case sequenceParser.NIL:
            localctx = new NilAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 456;
            this.match(sequenceParser.NIL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parExpr;
    return this;
}

ParExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParExprContext.prototype.constructor = ParExprContext;

ParExprContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

ParExprContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ParExprContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

ParExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParExpr(this);
	}
};

ParExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParExpr(this);
	}
};




sequenceParser.ParExprContext = ParExprContext;

sequenceParser.prototype.parExpr = function() {

    var localctx = new ParExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, sequenceParser.RULE_parExpr);
    try {
        this.state = 468;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 459;
            this.match(sequenceParser.OPAR);
            this.state = 460;
            this.condition();
            this.state = 461;
            this.match(sequenceParser.CPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 463;
            this.match(sequenceParser.OPAR);
            this.state = 464;
            this.condition();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 465;
            this.match(sequenceParser.OPAR);
            this.state = 466;
            this.match(sequenceParser.CPAR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 467;
            this.match(sequenceParser.OPAR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ConditionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCondition(this);
	}
};




sequenceParser.ConditionContext = ConditionContext;

sequenceParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, sequenceParser.RULE_condition);
    try {
        this.state = 472;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 470;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 471;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


sequenceParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 42:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sequenceParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sequenceParser = sequenceParser;
