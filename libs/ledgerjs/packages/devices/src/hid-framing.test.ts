import createHIDframing, { ResponseAcc } from "./hid-framing";

describe("createHIDframing.makeBlocks", () => {
  const channel = Math.floor(Math.random() * 0xffff);
  const channelBytes = [channel >> 8, channel & 0x00ff];
  const packetSize = 64;
  const hidFramingHelper = createHIDframing(channel, packetSize);

  const tests = [
    {
      // A get version
      input: { apdu: Buffer.from([0xe0, 0x01, 0, 0, 0]) },
      expectedOutput: [
        Buffer.from([
          ...channelBytes,
          ...[0x05, 0, 0, 0, 0x05, 0xe0, 0x01, 0x00, 0x00, 0x00],
          ...Buffer.alloc(52, 0), // 0-padding
        ]),
      ],
    },
    {
      // A (long) edit device name
      input: {
        apdu: Buffer.from([
          0xe0, 0xd4, 0, 0, 0x40, 0x54, 0x6f, 0x66, 0x75, 0x49, 0x73, 0x4e, 0x75, 0x74, 0x72, 0x69,
          0x74, 0x69, 0x6f, 0x75, 0x73, 0x41, 0x6e, 0x64, 0x42, 0x72, 0x69, 0x6e, 0x67, 0x73, 0x4a,
          0x6f, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68,
          0x69, 0x6e, 0x65, 0x73, 0x73, 0x48, 0x61, 0x72, 0x6d, 0x6f, 0x6e, 0x79, 0x49, 0x6e, 0x45,
          0x76, 0x65, 0x72, 0x79, 0x42, 0x69, 0x74, 0x65,
        ]),
      },
      expectedOutput: [
        // Frame 1
        Buffer.from([
          ...channelBytes,
          ...[0x05, 0, 0, 0, 0x45, 0xe0, 0xd4, 0x00, 0x00, 0x40], // Tag, frame id and APDU until the Data part
          ...[
            0x54, 0x6f, 0x66, 0x75, 0x49, 0x73, 0x4e, 0x75, 0x74, 0x72, 0x69, 0x74, 0x69, 0x6f,
            0x75, 0x73, 0x41, 0x6e, 0x64, 0x42, 0x72, 0x69, 0x6e, 0x67, 0x73, 0x4a, 0x6f, 0x79,
            0x44, 0x65, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x69,
            0x6e, 0x65, 0x73, 0x73, 0x48, 0x61, 0x72, 0x6d, 0x6f, 0x6e,
          ], // First part of the new device name
        ]),
        // Frame 2
        Buffer.from([
          ...channelBytes,
          ...[0x05, 0, 0x01], // Tag and frame id
          ...[0x79, 0x49, 0x6e, 0x45, 0x76, 0x65, 0x72, 0x79, 0x42, 0x69, 0x74, 0x65], // Second part of the new device name
          ...Buffer.alloc(47, 0), // 0-padding
        ]),
      ],
    },
  ];

  tests.forEach(({ input, expectedOutput }) => {
    test(`Input: ${JSON.stringify(input)} -> Expected output: ${JSON.stringify(
      expectedOutput,
    )}`, () => {
      const result = hidFramingHelper.makeBlocks(input.apdu);
      expect(result).toEqual(expectedOutput);
    });
  });
});

describe("createHIDframing.reduceResponse and createHIDframing.getReducedResult", () => {
  const channel = Math.floor(Math.random() * 0xffff);
  const channelBytes = [channel >> 8, channel & 0x00ff];
  const packetSize = 64;
  const hidFramingHelper = createHIDframing(channel, packetSize);

  const tests = [
    {
      // Response from a get version
      input: [
        {
          chunk: Buffer.from([
            ...channelBytes,
            ...[0x05, 0, 0, 0, 0x1f], // Tag, frame id and message length (2 bytes)
            ...[
              0x33, 0x20, 0x00, 0x04, 0x05, 0x31, 0x2e, 0x33, 0x2e, 0x30, 0x04, 0xe6, 0x02, 0x00,
              0x00, 0x04, 0x35, 0x2e, 0x32, 0x34, 0x04, 0x30, 0x2e, 0x34, 0x38, 0x01, 0x00, 0x01,
              0x00, 0x90, 0x00,
            ],
            ...Buffer.alloc(26, 0), // 0-padding
          ]),
        },
      ],
      expectedOutput: Buffer.from([
        0x33, 0x20, 0x00, 0x04, 0x05, 0x31, 0x2e, 0x33, 0x2e, 0x30, 0x04, 0xe6, 0x02, 0x00, 0x00,
        0x04, 0x35, 0x2e, 0x32, 0x34, 0x04, 0x30, 0x2e, 0x34, 0x38, 0x01, 0x00, 0x01, 0x00, 0x90,
        0x00,
      ]),
    },
    {
      // Response from a get device (long) name
      input: [
        // 1st frame
        {
          chunk: Buffer.from([
            ...channelBytes,
            ...[0x05, 0, 0, 0, 0x42], // Tag, frame id and message length (2 bytes)
            ...[
              0x54, 0x6f, 0x66, 0x75, 0x49, 0x73, 0x4e, 0x75, 0x74, 0x72, 0x69, 0x74, 0x69, 0x6f,
              0x75, 0x73, 0x41, 0x6e, 0x64, 0x42, 0x72, 0x69, 0x6e, 0x67, 0x73, 0x4a, 0x6f, 0x79,
              0x44, 0x65, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x69,
              0x6e, 0x65, 0x73, 0x73, 0x48, 0x61, 0x72, 0x6d, 0x6f, 0x6e, 0x79, 0x49, 0x6e, 0x45,
              0x76,
            ],
          ]),
        },
        // 2nd frame
        {
          chunk: Buffer.from([
            ...channelBytes,
            ...[0x05, 0, 0x01], // Tag and frame id
            ...[0x65, 0x72, 0x79, 0x42, 0x69, 0x74, 0x65, 0x90, 0x00],
            ...Buffer.alloc(50, 0), // 0-padding
          ]),
        },
      ],
      expectedOutput: Buffer.from([
        0x54, 0x6f, 0x66, 0x75, 0x49, 0x73, 0x4e, 0x75, 0x74, 0x72, 0x69, 0x74, 0x69, 0x6f, 0x75,
        0x73, 0x41, 0x6e, 0x64, 0x42, 0x72, 0x69, 0x6e, 0x67, 0x73, 0x4a, 0x6f, 0x79, 0x44, 0x65,
        0x6c, 0x69, 0x67, 0x68, 0x74, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x69, 0x6e, 0x65, 0x73,
        0x73, 0x48, 0x61, 0x72, 0x6d, 0x6f, 0x6e, 0x79, 0x49, 0x6e, 0x45, 0x76, 0x65, 0x72, 0x79,
        0x42, 0x69, 0x74, 0x65, 0x90, 0x00,
      ]),
    },
  ];

  tests.forEach(({ input, expectedOutput }) => {
    test(`Input: ${JSON.stringify(input)} -> Expected output: ${JSON.stringify(
      expectedOutput,
    )}`, () => {
      let responseAccumulator: ResponseAcc | null = null;

      for (const currentFrame of input) {
        responseAccumulator = hidFramingHelper.reduceResponse(
          responseAccumulator,
          currentFrame.chunk,
        );
      }
      const result = hidFramingHelper.getReducedResult(responseAccumulator);

      expect(result).toEqual(expectedOutput);
    });
  });
});
