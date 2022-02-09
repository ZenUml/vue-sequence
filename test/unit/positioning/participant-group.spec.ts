import {antlr4, ParticipantListener, seqDsl, SingleOrGroup} from "@/positioning/ParticipantListener";

function Participants2(code: string) {
  const rootContext = seqDsl.RootContext(code);
  const listener = new ParticipantListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT
  walker.walk(listener, rootContext)
  return listener.result();
}

function FlattenedParticipants(code: string) {
  const rootContext = seqDsl.RootContext(code);
  const listener = new ParticipantListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT
  walker.walk(listener, rootContext)
  return listener.flatten();
}

describe('participant group', () => {
  it.each([
    ['A', 'A', ''],
    ['@EC2', 'Missing `Participant` name', ''],
  ])('Code `%s` produces one single participant with name `%s`', (code, name, left) => {
    const participants2 = Participants2(code);
    expect(participants2).toEqual([
      {type: SingleOrGroup.SINGLE, name: '_STARTER_',  left: '', "children":[] },
      {type: SingleOrGroup.SINGLE, name,               left, "children":[] }
    ])
  })

  it.each([
    ['A B', 'A', ''],
    ['A B', 'B', 'A'],
  ])('Code `%s` tells left of `%s` is `%s`', (code: string, name: string, left?: string) => {
    const participants2 = Participants2(code);
    expect(participants2.find(p => p.name === name)?.left).toBe(left)
  })

  // it should print out a tree: root { A { B C } }
  it('prints participants', () => {
    const code = 'A group { B C }';
    const expected = [
      {"name": "_STARTER_", "type": 0, "children": [], "left": ""},
      {"name": "A", "type": 0, "children": [], "left": ""},
      {
      "type": 1,
      "children": [
        {"name": "B", "type": 0, "children": [], "left": ""},
        {"name": "C", "type": 0, "children": [], "left": ""}],
      "left": "A",
      "name": undefined,
    }];
    const actual = Participants2(code);
    expect(actual).toEqual(expected)
  })

  it('get flatten participants', () => {
    const code = 'A group { B C }';
    const expected = [
      {"type": 0, "name": "_STARTER_", "left": "", "children":[]},
      {"type": 0, "name": "A", "left": "_STARTER_", "children":[]},
      {"type": 0, "name": "B", "left": "A", "children":[]},
      {"type": 0, "name": "C", "left": "B", "children":[]}
    ];

    expect(FlattenedParticipants(code)).toEqual(expected)
  })

  it('get flatten participants', () => {
    const code = 'A group { B C } @Starter(D)';
    const expected = [
      {"type": 0, "name": "D", "left": "", "children":[]},
      {"type": 0, "name": "A", "left": "D", children:[]},
      {"type": 0, "name": "B", "left": "A", children:[]},
      {"type": 0, "name": "C", "left": "B", children:[]}
    ];
    expect(FlattenedParticipants(code)).toEqual(expected)
  })

  it('get flatten participants', () => {
    const code = 'A group { B C } @Starter(C)';
    const expected = [
      {"type": 0, "name": "A", "left": "", children:[]},
      {"type": 0, "name": "B", "left": "A", children:[]},
      {"type": 0, "name": "C", "left": "B", children:[]}
    ];
    expect(FlattenedParticipants(code)).toEqual(expected)
  })
})
