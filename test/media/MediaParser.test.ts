import { describe, it } from 'mocha';
import assert from 'assert';
import { MediaParser } from '../../src/media/MediaParser';

const file = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';

describe('MediaParser.ts', () => {
    it('static ReadFromFileSync()', () => {
        const media = MediaParser.ReadFromFileSync(file);
        assert.notDeepEqual(media, null);
    });
    it('static ReadFromFileSync() with bin', () => {
        const media = MediaParser.ReadFromFileSync(file, 'ffprobe');
        assert.notDeepEqual(media, null);
    });
    it('static ReadFromFile()', (done) => {
        MediaParser.ReadFromFile(file)
            .then(media => {
                assert.notDeepEqual(media, null);
                done();
            });
    });
    it('static ReadFromFile() with bin', (done) => {
        MediaParser.ReadFromFile(file, 'ffprobe')
            .then(media => {
                assert.notDeepEqual(media, null);
                done();
            });
    });
});