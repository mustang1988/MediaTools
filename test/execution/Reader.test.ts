import { describe, it } from 'mocha';
import assert from 'assert';
import { Reader } from '../../src/execution/Reader';
import { EnumLogLevel } from '../../src/enumeration/EnumLogLevel';
import _ from 'lodash';
import { EnumPrintFormat } from '../../src/enumeration/EnumPrintFormat';
import { EnumSelectStream } from '../../src/enumeration/EnumSelectStream';
import { Media } from '../../src/media/Media';

describe('Reader.ts', () => {
    it('constructor()', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
    });
    it('constructor() with bin', () => {
        const bin = 'F:\\ffmpeg\\ffprobe.exe';
        const reader = new Reader(bin);
        assert.notDeepEqual(reader, null);
    });
    it('getBin()', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        assert.deepEqual(reader.getBin(), 'ffprobe');
    });
    it('getBin() with bin', () => {
        const bin = 'F:\\ffmpeg\\ffprobe.exe';
        const reader = new Reader(bin);
        assert.notDeepEqual(reader, null);
        assert.deepEqual(reader.getBin(), bin);
    });
    it('v(level?: EnumLogLevel)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const log_level = EnumLogLevel.ERROR;
        reader.v(log_level);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-v')?.getValue(), log_level);
    });
    it('v(level?: EnumLogLevel) by default', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        reader.v();
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-v')?.getValue(), EnumLogLevel.PANIC);
    });
    it('of(format?: EnumPrintFormat)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const format = EnumPrintFormat.XML;
        reader.of(format);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-of')?.getValue(), format);
    });
    it('of(format?: EnumPrintFormat) by default', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        reader.of();
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-of')?.getValue(), EnumPrintFormat.JSON);
    });
    it('show_streams(show?: boolean)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const show = false;
        reader.show_streams(show);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-show_streams')?.getValue(), show);
    });
    it('show_streams(show?: boolean) by default', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        reader.show_streams();
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-show_streams')?.getValue(), true);
    });
    it('show_format(show?: boolean)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const show = false;
        reader.show_format(show);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-show_format')?.getValue(), show);
    });
    it('show_format(show?: boolean) by default', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        reader.show_format();
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-show_format')?.getValue(), true);
    });
    it('show_entries(entries: string)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const entries = 'format=duration';
        reader.show_entries(entries);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-show_entries')?.getValue(), entries);
    });
    it('select_streams(selector: EnumSelectStream)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const selector = EnumSelectStream.AUDIO;
        reader.select_streams(selector);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-select_streams')?.getValue(), selector);
    });
    it('i(input: string)', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const input = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        reader.i(input);
        assert.deepEqual(_.find(reader._options, opt => opt.getName() === '-i')?.getValue(), input);
    });
    it('execute()', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const input = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        reader.i(input);
        reader
            .of()
            .execute()
            .then(media => {
                assert.notDeepEqual(media instanceof Media, true);
            })
    });
    it('execute() failed', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const input = 'E:\\视频文件\\HDR视频文件\\a.mp4';
        reader.i(input);
        reader
            .of()
            .execute()
            .catch(error => {
                assert.notDeepEqual(error, null);
            })
    });
    it('executeSync()', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const input = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        reader.i(input);
        const media = reader
            .of()
            .executeSync();
        assert.deepEqual(media instanceof Media, true);
    });
    it('executeSync() failed', () => {
        const reader = new Reader();
        assert.notDeepEqual(reader, null);
        const input = 'E:\\视频文件\\HDR视频文件\\a.mp4';
        reader.i(input);
        const media = reader.executeSync()
        assert.deepEqual(media, null);
    });
});