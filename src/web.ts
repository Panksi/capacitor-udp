import { WebPlugin } from '@capacitor/core';

// TODO lvb, maybe implement a safe mock web plugin for development
import type { UDPPlugin } from './definitions';

export class UDPWeb extends WebPlugin implements UDPPlugin {
  async create(options?: {
    properties?: {
      name?: string;
      bufferSize?: number;
    } ;
  }): Promise<{ socketId: number; ipv4: string; ipv6: string; }> {
    console.log(options);
    Promise.resolve({status:'error', message:'Idunno'});
    throw new Error('Method not implemented.');
  }

  async bind(options: { socketId: number; address: string; port: number; }): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
  async send(options: { socketId: number; address: string; port: number; buffer: string; }): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
}
