import {WidthFunc} from "../../../src/positioning/Coordinate";
import {PosCal3} from "../../../src/positioning/posCal3";

let seqDsl = require('../../../src/parser/index');

export let stubWidthProvider: WidthFunc = (text, _) => {
  return parseInt(text.substring(1));
};

describe('PosCal3', () => {
  it('should return default positions for declared participants', () => {
    assertParticipantHasGapAndWidth('A500', 'A500', 100, 500);
    assertParticipantHasGapAndWidth('@Starter(A500) A500.m100', 'A500', 100, 500);
  })
  it('should return the correct position', () => {
    assertParticipantOwnsMessageSignature('A500.m100', 'A500', 'm100');
    assertParticipantHasGapAndWidth('A500.m100', 'A500', 100, 500);
  });

  it('should return the correct position - for long method name', () => {
    assertParticipantOwnsMessageSignature('A500.m400', 'A500', 'm400');
    assertParticipantHasGapAndWidth('A500.m400', 'A500', 400, 500);
  });

  // A.m1 B.m2
  // B.m2 should be ignored, because it is not from 'A' (the previous participant)
  it('should return the correct position - for long method name', () => {
    assertParticipantOwnsMessageSignature('A500.m100 B600.m200', 'A500', 'm100');
    assertParticipantOwnsMessageSignature('A500.m100 B600.m200', 'B600', 'm200');
    assertParticipantHasGapAndWidth('A500.m100 B600.m200', 'A500', 100, 500);
    assertParticipantHasGapAndWidth('A500.m100 B600.m200', 'B600', 100, 600);
  });
})

function assertParticipantOwnsMessageSignature(code: string, participant: string, signature: string) {
  let rootContext = seqDsl.RootContext(code);
  const posCal3 = new PosCal3();
  let ownableMessages = posCal3.getOwnedMessagesList(rootContext);

  const message = ownableMessages?.find(m => m.owner === participant)?.ownableMessages?.find(m => m.signature === signature);
  expect(message).toBeDefined();
}

function assertParticipantHasGapAndWidth(code: string, participant: string, gap: number, width: number) {
  let rootContext = seqDsl.RootContext(code);
  const posCal3 = new PosCal3();
  let coordinates2 = posCal3.getCoordinates2(rootContext, stubWidthProvider);

  const coordinate2 = coordinates2.find(c => c.participant === participant);
  expect(coordinate2?.gap).toEqual(gap);
  expect(coordinate2?.width).toEqual(width);
}
