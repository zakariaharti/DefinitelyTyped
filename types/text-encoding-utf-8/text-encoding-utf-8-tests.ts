

function test_encoder() {
    var text = "plain text";
    var uint8array: Uint8Array;

    // constructor
    uint8array = new TextEncoder().encode(text);
    uint8array = new TextEncoder('utf-8').encode(text);

    uint8array = TextEncoder().encode(text);
    uint8array = TextEncoder('utf-8').encode(text);

    // attributes
    var encoder = new TextEncoder();
    encoder.encoding = 'utf-8';
    var encoding: string = encoder.encoding;

    // methods
    encoder.encode();
    encoder.encode(text);
}

function test_decoder() {
    var text = "plain text";
    var uint8array: Uint8Array = TextEncoder().encode(text);
    var arrayBuffer: ArrayBuffer = uint8array.buffer

    // constructor
    text = new TextDecoder().decode(uint8array);
    text = new TextDecoder('utf-8').decode(uint8array);

    text = TextDecoder().decode(uint8array);
    text = TextDecoder('utf-8').decode(uint8array);

    // attributes
    var decoder = new TextDecoder();

    decoder.encoding = 'utf-8';
    var encoding: string = decoder.encoding;

    decoder.fatal = true;
    var fatal: boolean = decoder.fatal;

    decoder.ignoreBOM = true;
    var ignoreBOM: boolean = decoder.ignoreBOM;

    // methods
    decoder.decode();
    decoder.decode(uint8array);
    decoder.decode(arrayBuffer);
}
