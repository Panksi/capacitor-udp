// import type { PluginListenerHandle } from '@capacitor/core';

export interface UDPPlugin {
  create(
    options?: {
      properties?: { 
        name?: string; 
        bufferSize?: number 
      };
  }): Promise<{ 
        socketId: number; 
        ipv4: string; 
        ipv6: string 
      }>;

  // update(options: {
  //   socketId: number;
  //   properties: { name?: string; bufferSize?: number };
  // }): Promise<void>;

  // setPaused(options: { socketId: number; paused: boolean }): Promise<void>;

  bind(options: {
    socketId: number;
    address: string;
    port: number;
  }): Promise<void>;

  send(options: {
    socketId: number;
    address: string;
    port: number;
    buffer: string;
  }): Promise<void>;

  // closeAllSockets(): Promise<void>;

  // close(options: { socketId: number }): Promise<void>;

  // getInfo(options: {
  //   socketId: number;
  // }): Promise<{
  //   socketId: number;
  //   bufferSize: number;
  //   name: string | null;
  //   paused: boolean;
  //   localAddress?: string;
  //   localPort?: number;
  // }>;

  // getSockets(): Promise<{
  //   sockets: [
  //     {
  //       socketId: number;
  //       bufferSize: number;
  //       name: string | null;
  //       paused: boolean;
  //       localAddress?: string;
  //       localPort?: number;
  //     },
  //   ];
  // }>;

  // joinGroup(options: { socketId: number; address: string }): Promise<void>;

  // leaveGroup(options: { socketId: number; address: string }): Promise<void>;

  // setMulticastTimeToLive(options: {
  //   socketId: number;
  //   ttl: number;
  // }): Promise<void>;

  // setBroadcast(options: { socketId: number; enabled: boolean }): Promise<void>;

  // setMulticastLoopbackMode(options: {
  //   socketId: number;
  //   enabled: boolean;
  // }): Promise<void>;

  // getJoinedGroups(): Promise<{ groups: [string] }>;

  // addListener(
  //   events: 'receive',
  //   functions: (params: { socketId: number; buffer: string }) => void,
  // ): PluginListenerHandle;

  // addListener(
  //   events: 'receiveError',
  //   functions: (params: string) => void,
  // ): PluginListenerHandle;
}
