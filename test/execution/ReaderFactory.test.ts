import { describe, it } from 'mocha';
import assert from 'assert';
import { ReaderFactory } from '../../src/execution/ReaderFactory';
import { Media } from '../../src/media/Media';

const input = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
const bin = 'F:\\ffmpeg\\ffprobe.exe';

describe('ReaderFactory.ts', () => {
    it('static ReadFromFileSync()', () => {
        const media = ReaderFactory.ReadFromFileSync(input);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media instanceof Media, true);
    });

    it('static ReadFromFileSync() with bin', () => {
        const media = ReaderFactory.ReadFromFileSync(input, bin);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media instanceof Media, true);
    });

    it('static ReadFromFileSync() with invalid bin', () => {
        const media = ReaderFactory.ReadFromFileSync(input, '');
        assert.deepEqual(media, null);
    });

    it('static ReadFromFile()', (done) => {
        ReaderFactory.ReadFromFile(input)
            .then(media => {
                assert.notDeepEqual(media, null);
                assert.deepEqual(media instanceof Media, true);
                done();
            })
            .catch(error => {
                done();
            })
    });

    it('static ReadFromFile() with bin', (done) => {
        ReaderFactory.ReadFromFile(input, bin)
            .then(media => {
                assert.notDeepEqual(media, null);
                assert.deepEqual(media instanceof Media, true);
                done();
            })
            .catch(error => {
                done();
            })
    });

    it('static ReadFromFile() with invalid bin', (done) => {
        ReaderFactory.ReadFromFile(input, '')
            .then(media => {
                assert.notDeepEqual(media, null);
                assert.deepEqual(media instanceof Media, true);
                done();
            })
            .catch(error => {
                assert.notDeepEqual(error, null);
                done();
            })
    });
});