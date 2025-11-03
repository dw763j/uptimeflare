import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "HUALIMUGU's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  // links: [
  //   { link: 'https://github.com/lyc8503', label: 'GitHub' },
  //   { link: 'https://blog.lyc8503.net/', label: 'Blog' },
  //   { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  // ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '🇭🇰 yecaoyun-hk': ['ad.h.hlmg.tech'],
    '🇭🇰 uqidc-hk': ['xg.hlmg.tech', 'cloud.hlmg.tech'],
    '🇭🇰 zouter-hk': ['zt.hlmg.tech', 'mail.hlmg.tech']
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'hualimugu:hi8HlHhkAAUKENH1z99I',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    // {
    //   // `id` should be unique, history will be kept if the `id` remains constant
    //   id: 'cloud.dc.hlmg.tech',
    //   // `name` is used at status page and callback message
    //   name: 'Cloudreve at dc02@racknerd',
    //   // `method` should be a valid HTTP Method
    //   method: 'GET',
    //   // `target` is a valid URL
    //   target: 'https://cloud.dc.hlmg.tech',
    // },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'xg.hlmg.tech',
      // `name` is used at status page and callback message
      name: 'Derp at uqidc@hk',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://xg.hlmg.tech',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'zt.hlmg.tech',
      // `name` is used at status page and callback message
      name: 'Derp at zouter@hk',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://zt.hlmg.tech',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'cloud.hlmg.tech',
      // `name` is used at status page and callback message
      name: 'Cloudreve at zouter@hk or uqidc@hk',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://cloud.hlmg.tech',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'ad.h.hlmg.tech',
      // `name` is used at status page and callback message
      name: 'AdguardHome at yecaoyun@hk',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://ad.h.hlmg.tech',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'mail.hlmg.tech',
      // `name` is used at status page and callback message
      name: 'Mailu at zouter@hk',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://mail.hlmg.tech',
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    // appriseApiServer: 'https://apprise.example.com/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    // recipientUrl: 'tgram://bottoken/ChatID',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    // timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    // gracePeriod: 5,
    // [Optional] disable notification for monitors with specified ids
    // skipNotificationIds: ['foo_monitor', 'bar_monitor'],
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
const maintenances: MaintenanceConfig[] = []
// const maintenances: MaintenanceConfig[] = [
//   {
//     // [Optional] Monitor IDs to be affected by this maintenance
//     // monitors: ['foo_monitor', 'bar_monitor'],
//     // [Optional] default to "Scheduled Maintenance" if not specified
//     // title: 'Test Maintenance',
//     // Description of the maintenance, will be shown at status page
//     // body: 'This is a test maintenance, server software upgrade',
//     // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
//     // start: '2025-04-27T00:00:00+08:00',
//     // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
//     // if not specified, the maintenance will be considered as on-going
//     // end: '2025-04-30T00:00:00+08:00',
//     // [Optional] color of the maintenance alert at status page, default to "yellow"
//     // color: 'blue',
//   },
// ]

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
