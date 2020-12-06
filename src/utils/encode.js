class Encode {
    encodeString(string) {
        const encodeBuffer = new Buffer(string);
        return encodeBuffer.toString("base64");
    }

    decodeString(string) {
        const decodeBuffer = new Buffer(string, "base64");
        return decodeBuffer.toString("ascii");
    }
}

const encode = new Encode();
export default encode;
