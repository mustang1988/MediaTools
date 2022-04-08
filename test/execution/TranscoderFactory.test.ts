import { describe, it } from 'mocha';
import assert from 'assert';
import { TranscoderFactory } from '../../src/execution/TranscoderFactory';

const input = 'C:\\Users\\pgu.LANDHIGHTECH101\\Desktop\\绿幕测试视频\\test.mp4';
const output = 'a.xxx';
const bin = 'F:\\ffmpeg\\ffmpeg.exe';
describe('TranscoderFactory.ts', () => {
    it('static ToMp4()', () => {
        const transcoder = TranscoderFactory.ToMp4(input, output, bin);
        assert.notDeepEqual(transcoder, null);
        const res = transcoder.executeSync();
        assert.notDeepEqual(res, null);
    });
    it('static ToMp4() by default', () => {
        const transcoder = TranscoderFactory.ToMp4(input, output);
        assert.notDeepEqual(transcoder, null);
        const res = transcoder.executeSync();
        assert.notDeepEqual(res, null);
    });
    it('static ToWebM()', () => {
        const transcoder = TranscoderFactory.ToWebM(input, output, bin);
        assert.notDeepEqual(transcoder, null);
        const res = transcoder.executeSync();
        assert.notDeepEqual(res, null);
    });
    it('static ToWebM() by default', () => {
        const transcoder = TranscoderFactory.ToWebM(input, output);
        assert.notDeepEqual(transcoder, null);
        const res = transcoder.executeSync();
        assert.notDeepEqual(res, null);
    });
    it('static ToHLS()', () => {
        const transcoder = TranscoderFactory.ToHLS(input, output, bin);
        assert.notDeepEqual(transcoder, null);
        const res = transcoder.executeSync();
        assert.notDeepEqual(res, null);
    });
    it('static ToHLS() by default', () => {
        const transcoder = TranscoderFactory.ToHLS(input, output);
        assert.notDeepEqual(transcoder, null);
        const res = transcoder.executeSync();
        assert.notDeepEqual(res, null);
    });
});