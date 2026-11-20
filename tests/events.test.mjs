import test from 'node:test';
import assert from 'node:assert/strict';
import {nextEvent,formatDate,formatTime} from '../src/lib/events.mjs';
const event=(start,end,other={})=>({start,end,status:'scheduled',published:true,...other});
test('December cancellation and unpublished entries are never promoted',()=>{
 const cancelled=event('2026-12-16T15:00:00-06:00','2026-12-16T16:30:00-06:00',{status:'cancelled'});
 const draft=event('2026-11-25T15:00:00-06:00','2026-11-25T16:30:00-06:00',{published:false});
 const january=event('2027-01-20T15:00:00-06:00','2027-01-20T16:30:00-06:00');
 assert.equal(nextEvent([january,cancelled,draft],new Date('2026-11-20T12:00:00Z')),january);
});
test('event disappears exactly when it ends, without inventing a recurrence',()=>{const e=event('2027-01-20T15:00:00-06:00','2027-01-20T16:30:00-06:00');assert.equal(nextEvent([e],new Date('2027-01-20T22:29:59Z')),e);assert.equal(nextEvent([e],new Date('2027-01-20T22:30:00Z')),undefined);});
test('Central time formatting handles daylight saving and UTC date boundaries',()=>{assert.equal(formatDate('2027-01-21T01:00:00Z'),'January 20, 2027');assert.equal(formatTime('2027-01-20T21:00:00Z'),'3:00 PM CST');assert.equal(formatTime('2027-07-21T20:00:00Z'),'3:00 PM CDT');});
test('nextEvent sorts without mutating its input',()=>{const a=event('2027-02-17T15:00:00-06:00','2027-02-17T16:30:00-06:00'),b=event('2027-01-20T15:00:00-06:00','2027-01-20T16:30:00-06:00');const input=[a,b];assert.equal(nextEvent(input,new Date('2026-11-20')),b);assert.deepEqual(input,[a,b]);});
