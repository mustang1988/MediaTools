import { describe, it } from 'mocha';
import assert from 'assert';
import { Transcoder } from '../../src/execution/Transcoder';
import _ from 'lodash';
import { EnumConcatSafe } from '../../src/enumeration/EnumConcatSafe';
import { EnumHLSSegmentType } from '../../src/enumeration/EnumHLSSegmentType';
import { EnumVPXDeadline } from '../../src/enumeration/EnumVPXDeadline';
import { EnumVPXQuality } from '../../src/enumeration/EnumVPXQuality';
import { EnumH26XPreset } from '../../src/enumeration/EnumH26XPreset';
import { EnumH26XProfile } from '../../src/enumeration/EnumH26XProfile';
import { EnumColorspace } from '../../src/enumeration/EnumColorspace';
import path from 'path';
import { existsSync, mkdirSync, readdirSync, rmdir, rmdirSync, unlinkSync } from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'OUTPUT_DIR');
describe('Transcoder.ts', () => {
    before(() => {
        !existsSync(OUTPUT_DIR) && mkdirSync(OUTPUT_DIR);
    });
    it('constructor()', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
    });
    it('constructor() with bin', () => {
        const bin = 'F:\\ffmpeg\\ffmpeg.exe';
        const transcoder = new Transcoder(bin);
        assert.notDeepEqual(transcoder, null);
    });
    it('getBin()', () => {
        const bin = 'F:\\ffmpeg\\ffmpeg.exe';
        const transcoder = new Transcoder(bin);
        assert.notDeepEqual(transcoder, null);
        assert.deepEqual(transcoder.getBin(), bin);
    });
    it('i(input: string, source?: boolean, format?: string) input file', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        transcoder.i(input);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-i')?.getValue(), input);
    });
    it('i(input: string, source?: boolean, format?: string) input file not exists', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = '1.mp4';
        transcoder.i(input);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-i'), undefined);
    });
    it('i(input: string, source?: boolean, format?: string) input source', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = 'nullsrc';
        const input_format = 'null';
        transcoder.i(input, true, input_format);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-i')?.getValue(), input);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-f')?.getValue(), input_format);
    });
    it('b_a(bit_rate: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const bit_rate = 100;
        transcoder.b_a(bit_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-b:a')?.getValue(), bit_rate);
    });
    it('c_a(codec: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const codec = 'aac';
        transcoder.c_a(codec);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-c:a')?.getValue(), codec);
    });
    it('channel_layout(layout: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const layout = 'mono';
        transcoder.channel_layout(layout);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-channel_layout')?.getValue(), layout);
    });
    it('an(confirm?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const confirm = true;
        transcoder.an(confirm);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-an')?.getValue(), confirm);
    });
    it('an(confirm?: boolean) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.an();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-an')?.getValue(), false);
    });
    it('ar(sample_rate: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const sample_rate = 44100;
        transcoder.ar(sample_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-ar')?.getValue(), sample_rate);
    });
    it('t(time: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const time = 10;
        transcoder.t(time);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-t')?.getValue(), time);
    });
    it('ss(start?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const start = 10;
        transcoder.ss(start);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-ss')?.getValue(), start);
    });
    it('ss(start?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.ss();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-ss')?.getValue(), 0);
    });
    it('to(to: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const to = 10;
        transcoder.to(to);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-to')?.getValue(), to);
    });
    it('f(format: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const format = 'mp4';
        transcoder.f(format);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-f')?.getValue(), format);
    });
    it('output(output: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const output = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        transcoder.output(output);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '')?.getValue(), output);
    });
    it('y(confirm?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const confirm = false;
        transcoder.y(confirm);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-y')?.getValue(), confirm);
    });
    it('y(confirm?: boolean) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.y();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-y')?.getValue(), true);
    });
    it('threads(threads?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const threads = 10;
        transcoder.threads(threads);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-threads')?.getValue(), threads);
    });
    it('threads(threads?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.threads();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-threads')?.getValue(), 1);
    });
    it('vf(filter: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const filter = 'scale=1920:1080';
        transcoder.vf(filter);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-vf')?.getValue(), filter);
    });
    it('safe(safe?: EnumConcatSafe)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const safe = EnumConcatSafe.SAFE;
        transcoder.safe(safe);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-safe')?.getValue(), safe);
    });
    it('safe(safe?: EnumConcatSafe) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.safe();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-safe')?.getValue(), EnumConcatSafe.UNSAFE);
    });
    it('dn(confirm?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const confirm = false;
        transcoder.dn(confirm);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-dn')?.getValue(), confirm);
    });
    it('dn(confirm?: boolean)  by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.dn();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-dn')?.getValue(), false);
    });
    it('hls_list_size(size?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const size = 11;
        transcoder.hls_list_size(size);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_list_size')?.getValue(), size);
    });
    it('hls_list_size(size?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.hls_list_size();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_list_size')?.getValue(), 0);
    });
    it('hls_segment_filename(filename: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const filename = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        transcoder.hls_segment_filename(filename);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_segment_filename')?.getValue(), filename);
    });
    it('hls_segment_type(type?: EnumHLSSegmentType)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const type = EnumHLSSegmentType.FMP4;
        transcoder.hls_segment_type(type);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_segment_type')?.getValue(), type);
    });
    it('hls_segment_type(type?: EnumHLSSegmentType) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.hls_segment_type();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_segment_type')?.getValue(), EnumHLSSegmentType.MPEGTS);
    });
    it('hls_time(time?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const time = 10;
        transcoder.hls_time(time);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_time')?.getValue(), time);
    });
    it('hls_time(time?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.hls_time();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-hls_time')?.getValue(), 0);
    });
    it('sn(confirm?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const confirm = false;
        transcoder.sn(confirm);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-sn')?.getValue(), confirm);
    });
    it('sn(confirm?: boolean) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.sn();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-sn')?.getValue(), false);
    });
    it('cpu_used(cpu_used?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const cpu_used = 10;
        transcoder.c_v('libvpx-vp9').cpu_used(cpu_used);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-cpu-used')?.getValue(), cpu_used);
    });
    it('cpu_used(cpu_used?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').cpu_used();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-cpu-used')?.getValue(), 1);
    });
    it('cpu_used(cpu_used?: number) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.cpu_used();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-cpu-used'), undefined);
    });
    it('deadline(deadline?: EnumVPXDeadline)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const deadline = EnumVPXDeadline.GOOD;
        transcoder.c_v('libvpx-vp9').deadline(deadline);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-deadline')?.getValue(), deadline);
    });
    it('deadline(deadline?: EnumVPXDeadline) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').deadline();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-deadline')?.getValue(), EnumVPXDeadline.REALTIME);
    });
    it('deadline(deadline?: EnumVPXDeadline) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.deadline();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-deadline'), undefined);
    });
    it('frame_parallel(enable?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const enable = true;
        transcoder.c_v('libvpx-vp9').frame_parallel(enable);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-frame-parallel')?.getValue(), enable ? "1" : "0");
    });
    it('frame_parallel(enable?: boolean) false', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const enable = false;
        transcoder.c_v('libvpx-vp9').frame_parallel(enable);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-frame-parallel')?.getValue(), enable ? "1" : "0");
    });
    it('frame_parallel(enable?: boolean) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').frame_parallel();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-frame-parallel')?.getValue(), "1");
    });
    it('frame_parallel(enable?: boolean) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.frame_parallel();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-frame-parallel'), undefined);
    });
    it('level(level?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const level = 10;
        transcoder.c_v('libvpx-vp9').level(level);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-level')?.getValue(), level);
    });
    it('level(level?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').level();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-level')?.getValue(), 6.2);
    });
    it('level(level?: number) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.level();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-level'), undefined);
    });
    it('quality(quality?: EnumVPXQuality)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const quality = EnumVPXQuality.GOOD;
        transcoder.c_v('libvpx-vp9').quality(quality);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-quality')?.getValue(), quality);
    });
    it('quality(quality?: EnumVPXQuality) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').quality();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-quality')?.getValue(), EnumVPXQuality.REALTIME);
    });
    it('quality(quality?: EnumVPXQuality) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.quality();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-quality'), undefined);
    });
    it('row_mt(enable?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const enable = true;
        transcoder.c_v('libvpx-vp9').row_mt(enable);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-row-mt')?.getValue(), enable ? "1" : "0");
    });
    it('row_mt(enable?: boolean) false', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const enable = false;
        transcoder.c_v('libvpx-vp9').row_mt(enable);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-row-mt')?.getValue(), enable ? "1" : "0");
    });
    it('row_mt(enable?: boolean) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').row_mt();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-row-mt')?.getValue(), "1");
    });
    it('row_mt(enable?: boolean) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.row_mt();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-row-mt'), undefined);
    });
    it('speed(speed?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const speed = 10;
        transcoder.c_v('libvpx-vp9').speed(speed);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-speed')?.getValue(), speed);
    });
    it('speed(speed?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').speed();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-speed')?.getValue(), 1);
    });
    it('speed(speed?: number) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.speed();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-speed'), undefined);
    });
    it('tile_columns(columns?: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const columns = 10;
        transcoder.c_v('libvpx-vp9').tile_columns(columns);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-tile-columns')?.getValue(), columns);
    });
    it('tile_columns(columns?: number) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.c_v('libvpx-vp9').tile_columns();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-tile-columns')?.getValue(), 1);
    });
    it('tile_columns(columns?: number) not vpx codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.tile_columns();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-tile-columns'), undefined);
    });
    it('preset(preset: EnumH26XPreset)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const preset = EnumH26XPreset.ULTRAFAST;
        transcoder.c_v('libx264').preset(preset);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-preset')?.getValue(), preset);
    });
    it('preset(preset: EnumH26XPreset) not H.26x codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.preset(EnumH26XPreset.ULTRAFAST);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-preset'), undefined);
    });
    it('profile(profile: EnumH26XProfile)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const profile = EnumH26XProfile.MAIN;
        transcoder.c_v('libx264').profile(profile);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-profile:v')?.getValue(), profile);
    });
    it('profile(profile: EnumH26XProfile) not H.26x codec', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.profile(EnumH26XProfile.MAIN);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-profile:v'), undefined);
    });
    it('color_primaries(color_primaries: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const color_primaries = 10;
        transcoder.color_primaries(color_primaries);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-color_primaries')?.getValue(), color_primaries);
    });
    it('color_range(color_range: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const color_range = 10;
        transcoder.color_range(color_range);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-color_range')?.getValue(), color_range);
    });
    it('colorspace(colorspace: EnumColorspace)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const colorspace = EnumColorspace.BT709;
        transcoder.colorspace(colorspace);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-colorspace')?.getValue(), colorspace);
    });
    it('color_trc(color_trc: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const color_trc = 10;
        transcoder.color_trc(color_trc);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-color_trc')?.getValue(), color_trc);
    });
    it('r(frame_rate: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const frame_rate = '10/1';
        transcoder.r(frame_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-r')?.getValue()?.toString(), frame_rate);
    });
    it('r(frame_rate: string) invalid ratio', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const frame_rate = '10x1';
        transcoder.r(frame_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-r'), undefined);
    });
    it('g(gop: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const gop = 10;
        transcoder.g(gop);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-g')?.getValue(), gop);
    });
    it('maxrate(bit_rate: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const bit_rate = 10;
        transcoder.maxrate(bit_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-maxrate')?.getValue(), bit_rate);
    });
    it('minrate(bit_rate: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const bit_rate = 10;
        transcoder.minrate(bit_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-minrate')?.getValue(), bit_rate);
    });
    it('vn(confirm?: boolean)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const confirm = true;
        transcoder.vn(confirm);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-vn')?.getValue(), confirm);
    });
    it('vn(confirm?: boolean) by default', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.vn();
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-vn')?.getValue(), false);
    });
    it('pix_fmt(pix_fmt: string)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const pix_fmt = 'yuv420p';
        transcoder.pix_fmt(pix_fmt);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-pix_fmt')?.getValue(), pix_fmt);
    });
    it('b_V(bit_rate: number)', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const bit_rate = 10;
        transcoder.b_V(bit_rate);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-b:v')?.getValue(), bit_rate);
    });
    it('c_v(codec: string) h264', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const codec = 'libx264';
        transcoder.c_v(codec);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-c:v')?.getValue(), codec);
    });
    it('c_v(codec: string) vp9', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const codec = 'libvpx-vp9';
        transcoder.c_v(codec);
        assert.deepEqual(_.find(transcoder._options, opt => opt.getName() === '-c:v')?.getValue(), codec);
    });
    it('isBitRateLimit()', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        transcoder.b_V(10);
        assert.deepEqual(transcoder.isBitRateLimit(), true);
    });
    it('isBitRateLimit() false', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        assert.deepEqual(transcoder.isBitRateLimit(), false);
    });
    it('execute()', (done) => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = 'E:\\视频文件\\HDR视频文件\\Swordsmith.mp4';
        const output = path.join(OUTPUT_DIR, 'a.mp4');
        transcoder.i(input)
            .c_v('libx264')
            .output(output)
            .y()
            .execute()
            .then(res => {
                assert.notDeepEqual(res, null);
                done();
            })
            .catch(err => {
                assert.notDeepEqual(err, null);
                done();
            })
    });
    it('execute() failed', (done) => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = 'C:\\Users\\pgu.LANDHIGHTECH101\\Desktop\\绿幕测试视频\\test.mp4';
        const output = path.join(OUTPUT_DIR, 'a.mp4');
        transcoder.i(input)
            .c_v('libx264')
            .y()
            .output(output)
            .execute()
            .then(res => {
                assert.notDeepEqual(res, null);
                done();
            })
            .catch(err => {
                assert.notDeepEqual(err, null);
                done();
            })
    });
    it('executeSync()', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = 'C:\\Users\\pgu.LANDHIGHTECH101\\Desktop\\绿幕测试视频\\test.mp4';
        const output = path.join(OUTPUT_DIR, 'a.mp4');
        const res = transcoder.i(input)
            .c_v('libvpx-vp9')
            .y()
            .output(output)
            .executeSync()
        assert.notDeepEqual(res, null);
    });
    it('executeSync() failed', () => {
        const transcoder = new Transcoder();
        assert.notDeepEqual(transcoder, null);
        const input = 'E:\\视频文件\\HDR视频文件\\a.mp4';
        const output = path.join(OUTPUT_DIR, 'a.mp4');
        const res = transcoder.i(input)
            .c_v('libvpx-vp9')
            .b_V(10000)
            .y()
            .output(output)
            .executeSync()
        assert.notDeepEqual(res, null);
    });
    after(() => {
        for (const file of readdirSync(OUTPUT_DIR)) {
            unlinkSync(path.join(OUTPUT_DIR, file));
        }
        rmdirSync(OUTPUT_DIR);
    });
});