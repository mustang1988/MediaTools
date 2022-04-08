import { describe, it } from 'mocha';
import assert from 'assert';
import { TranscoderFactory } from '../../src/execution/TranscoderFactory';
import path from 'path';
import { existsSync, mkdirSync, readdirSync, rmdirSync, unlinkSync } from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'OUTPUT_DIR');
const input = 'C:\\Users\\pgu.LANDHIGHTECH101\\Desktop\\绿幕测试视频\\test.mp4';
const output = path.join(OUTPUT_DIR, 'a.xxx');
const bin = 'F:\\ffmpeg\\ffmpeg.exe';
describe('TranscoderFactory.ts', () => {
    before(() => {
        !existsSync(OUTPUT_DIR) && mkdirSync(OUTPUT_DIR);
    });
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
    after(() => {
        for (const file of readdirSync(OUTPUT_DIR)) {
            unlinkSync(path.join(OUTPUT_DIR, file));
        }
        rmdirSync(OUTPUT_DIR);
    });
});