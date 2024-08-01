import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { inject } from '@angular/core';

const xxx = {
  title: 'CISA Catalog of Known Exploited Vulnerabilities',
  catalogVersion: '2024.07.30',
  dateReleased: '2024-07-30T14:00:11.0971Z',
  count: 1140,
  vulnerabilities: [
    {
      cveID: 'CVE-2021-27104',
      vendorProject: 'Accellion',
      product: 'FTA',
      vulnerabilityName: 'Accellion FTA OS Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Accellion FTA contains an OS command injection vulnerability exploited via a crafted POST request to various admin endpoints.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27102',
      vendorProject: 'Accellion',
      product: 'FTA',
      vulnerabilityName: 'Accellion FTA OS Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Accellion FTA contains an OS command injection vulnerability exploited via a local web service call.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27101',
      vendorProject: 'Accellion',
      product: 'FTA',
      vulnerabilityName: 'Accellion FTA SQL Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Accellion FTA contains a SQL injection vulnerability exploited via a crafted host header in a request to document_root.html.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27103',
      vendorProject: 'Accellion',
      product: 'FTA',
      vulnerabilityName:
        'Accellion FTA Server-Side Request Forgery (SSRF) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Accellion FTA contains a server-side request forgery (SSRF) vulnerability exploited via a crafted POST request to wmProgressstat.html.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21017',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Heap-based Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Acrobat Acrobat and Reader contain a heap-based buffer overflow vulnerability that could allow an unauthenticated attacker to achieve code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-28550',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Adobe Acrobat and Reader contains a use-after-free vulnerability that could allow an unauthenticated attacker to achieve code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-4939',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Adobe ColdFusion contains a deserialization of untrusted data vulnerability that could allow for code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-15961',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Unrestricted File Upload Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Adobe ColdFusion contains an unrestricted file upload vulnerability that could allow for code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-4878',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Adobe Flash Player contains a use-after-free vulnerability that could allow for code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5735',
      vendorProject: 'Amcrest',
      product: 'Cameras and Network Video Recorder (NVR)',
      vulnerabilityName:
        'Amcrest Cameras and NVR Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Amcrest cameras and NVR contain a stack-based buffer overflow vulnerability through port 37777 that allows an unauthenticated, remote attacker to crash the device and possibly execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-2215',
      vendorProject: 'Android',
      product: 'Android Kernel',
      vulnerabilityName: 'Android Kernel Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Android Kernel contains a use-after-free vulnerability in binder.c that allows for privilege escalation from an application to the Linux Kernel. This vulnerability was observed chained with CVE-2020-0041 and CVE-2020-0069 under exploit chain "AbstractEmu."',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0041',
      vendorProject: 'Android',
      product: 'Android Kernel',
      vulnerabilityName: 'Android Kernel Out-of-Bounds Write Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Android Kernel binder_transaction of binder.c contains an out-of-bounds write vulnerability due to an incorrect bounds check that could allow for local privilege escalation. This vulnerability was observed chained with CVE-2019-2215 and CVE-2020-0069 under exploit chain "AbstractEmu."',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0069',
      vendorProject: 'MediaTek',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Mediatek Multiple Chipsets Insufficient Input Validation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Multiple MediaTek chipsets contain an insufficient input validation vulnerability and have missing SELinux restrictions in the Command Queue drivers ioctl handlers. This causes an out-of-bounds write leading to privilege escalation. This vulnerability was observed chained with CVE-2019-2215 and CVE-2020-0041 under exploit chain "AbstractEmu."',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-9805',
      vendorProject: 'Apache',
      product: 'Struts',
      vulnerabilityName:
        'Apache Struts Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apache Struts REST Plugin uses an XStreamHandler with an instance of XStream for deserialization without any type filtering, which can lead to remote code execution when deserializing XML payloads.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42013',
      vendorProject: 'Apache',
      product: 'HTTP Server',
      vulnerabilityName: 'Apache HTTP Server Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apache HTTP Server contains a path traversal vulnerability that allows an attacker to perform remote code execution if files outside directories configured by Alias-like directives are not under default \ufffdrequire all denied\ufffd or if CGI scripts are enabled. This CVE ID resolves an incomplete patch for CVE-2021-41773.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-41773',
      vendorProject: 'Apache',
      product: 'HTTP Server',
      vulnerabilityName: 'Apache HTTP Server Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apache HTTP Server contains a path traversal vulnerability that allows an attacker to perform remote code execution if files outside directories configured by Alias-like directives are not under default \ufffdrequire all denied\ufffd or if CGI scripts are enabled. The original patch issued under this CVE ID is insufficient, please review remediation information under CVE-2021-42013.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0211',
      vendorProject: 'Apache',
      product: 'HTTP Server',
      vulnerabilityName:
        'Apache HTTP Server Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apache HTTP Server, with MPM event, worker or prefork, code executing in less-privileged child processes or threads (including scripts executed by an in-process scripting interpreter) could execute code with the privileges of the parent process (usually root) by manipulating the scoreboard.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4437',
      vendorProject: 'Apache',
      product: 'Shiro',
      vulnerabilityName: 'Apache Shiro Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apache Shiro contains a vulnerability which may allow remote attackers to execute code or bypass intended access restrictions via an unspecified request parameter when a cipher key has not been configured for the "remember me" feature.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-17558',
      vendorProject: 'Apache',
      product: 'Solr',
      vulnerabilityName:
        'Apache Solr VelocityResponseWriter Plug-In Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'The Apache Solr VelocityResponseWriter plug-in contains an unspecified vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-17530',
      vendorProject: 'Apache',
      product: 'Struts',
      vulnerabilityName: 'Apache Struts Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Forced Object-Graph Navigation Language (OGNL) evaluation in Apache Struts, when evaluated on raw user input in tag attributes, can lead to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-5638',
      vendorProject: 'Apache',
      product: 'Struts',
      vulnerabilityName: 'Apache Struts Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apache Struts Jakarta Multipart parser allows for malicious file upload using the Content-Type value, leading to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-11776',
      vendorProject: 'Apache',
      product: 'Struts',
      vulnerabilityName: 'Apache Struts Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "Apache Struts contains a vulnerability that allows for remote code execution under two circumstances. One, where the alwaysSelectFullNamespace option is true and the value isn't set for a result defined in underlying configurations and in same time, its upper package configuration have no or wildcard namespace.  Or, using URL tag which doesn\ufffdt have value and action set and in same time, its upper package configuration have no or wildcard namespace.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30858',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, macOS Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and macOS WebKit contain a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-6223',
      vendorProject: 'Apple',
      product: 'iOS and macOS',
      vulnerabilityName: 'Apple iOS and macOS Group Facetime Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "Apple iOS and macOS Group FaceTime contains an unspecified vulnerability where the call initiator can cause the recipient's Apple device to answer unknowingly or without user interaction.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30860',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Integer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS CoreGraphics contain an integer overflow vulnerability which may allow code execution when processing a maliciously crafted PDF. The vulnerability is also known under the moniker of FORCEDENTRY.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-27930',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS FontParser contain a memory corruption vulnerability which may allow for code execution when processing maliciously crafted front.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30807',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS IOMobileFrameBuffer contain a memory corruption vulnerability which may allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-27950',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Initialization Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS contain a memory initialization vulnerability that may allow a malicious application to disclose kernel memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-27932',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS contain a type confusion vulnerability that may allow a malicious application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9818',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and watchOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and watchOS Out-of-Bounds Write Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and watchOS Mail contains an out-of-bounds write vulnerability which may allow memory modification or application termination when processing a maliciously crafted mail message.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9819',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and watchOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and watchOS Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and watchOS Mail contains a memory corruption vulnerability that may allow heap corruption when processing a maliciously crafted mail message.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30762',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS WebKit Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS WebKit contains a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1782',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Race Condition Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOs, macOS, watchOS, and tvOS contain a race condition vulnerability that may allow a malicious application to elevate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1870',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS WebKit Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and macOS WebKit contain an unspecified logic vulnerability that allows a remote attacker to execute code. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1871',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS WebKit Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and macOS WebKit contain an unspecified logic vulnerability that allows a remote attacker to execute code. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1879',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and watchOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and watchOS WebKit Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and watchOS WebKit contain an unspecified vulnerability that allows for universal cross-site scripting (XSS) when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30661',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Storage Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, watchOS, and Safari WebKit Storage contain a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30666',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS WebKit Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS WebKit contains a buffer-overflow vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30713',
      vendorProject: 'Apple',
      product: 'macOS',
      vulnerabilityName: 'Apple macOS Unspecified Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple macOS Transparency, Consent, and Control (TCC) contains an unspecified permissions issue which may allow a malicious application to bypass privacy preferences.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30657',
      vendorProject: 'Apple',
      product: 'macOS',
      vulnerabilityName: 'Apple macOS Unspecified Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple macOS contains an unspecified logic issue in System Preferences that may allow a malicious application to bypass Gatekeeper checks.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30665',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, watchOS, and tvOS WebKit contain a memory corruption vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30663',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Integer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and Safari WebKit contain an integer overflow vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30761',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS WebKit Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS WebKit contains a memory corruption vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30869',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, and macOS contain a type confusion vulnerability in the XNU which may allow a malicious application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9859',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Apple iOS, iPadOS, macOS, watchOS, and tvOS contain an unspecified vulnerability that may allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20090',
      vendorProject: 'Arcadyan',
      product: 'Buffalo Firmware',
      vulnerabilityName:
        'Arcadyan Buffalo Firmware Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Arcadyan Buffalo firmware contains a path traversal vulnerability that could allow unauthenticated, remote attackers to bypass authentication and access sensitive information. This vulnerability affects multiple routers across several different vendors.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27562',
      vendorProject: 'Arm',
      product: 'Trusted Firmware',
      vulnerabilityName:
        'Arm Trusted Firmware Out-of-Bounds Write Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Arm Trusted Firmware contains an out-of-bounds write vulnerability allowing the non-secure (NS) world to trigger a system halt, overwrite secure data, or print out secure data when calling secure functions under the non-secure processing environment (NSPE) handler mode. This vulnerability affects Yealink Device Management servers.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-28664',
      vendorProject: 'Arm',
      product: 'Mali Graphics Processing Unit (GPU)',
      vulnerabilityName:
        'Arm Mali Graphics Processing Unit (GPU) Unspecified Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Arm Mali Graphics Processing Unit (GPU) kernel driver contains an unspecified vulnerability that may allow a non-privileged user to gain write access to read-only memory, gain root privilege, corrupt memory, and modify the memory of other processes.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-28663',
      vendorProject: 'Arm',
      product: 'Mali Graphics Processing Unit (GPU)',
      vulnerabilityName:
        'Arm Mali Graphics Processing Unit (GPU) Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Arm Mali Graphics Processing Unit (GPU) kernel driver contains a use-after-free vulnerability that may allow a non-privileged user to make improper operations on GPU memory to gain root privilege, and/or disclose information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-3398',
      vendorProject: 'Atlassian',
      product: 'Confluence Server and Data Center',
      vulnerabilityName:
        'Atlassian Confluence Server and Data Center Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Atlassian Confluence Server and Data Center contain a path traversal vulnerability in the downloadallattachments resource that may allow a privileged, remote attacker to write files. Exploitation can lead to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-26084',
      vendorProject: 'Atlassian',
      product: 'Confluence Server and Data Center',
      vulnerabilityName:
        'Atlassian Confluence Server and Data Center Object-Graph Navigation Language (OGNL) Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Atlassian Confluence Server and Data Server contain an Object-Graph Navigation Language (OGNL) injection vulnerability that may allow an unauthenticated attacker to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11580',
      vendorProject: 'Atlassian',
      product: 'Crowd and Crowd Data Center',
      vulnerabilityName:
        'Atlassian Crowd and Crowd Data Center Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Atlassian Crowd and Crowd Data Center contain a remote code execution vulnerability resulting from a pdkinstall development plugin being incorrectly enabled in release builds.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-3396',
      vendorProject: 'Atlassian',
      product: 'Confluence Server and Data Server',
      vulnerabilityName:
        'Atlassian Confluence Server and Data Center Server-Side Template Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Atlassian Confluence Server and Data Center contain a server-side template injection vulnerability that may allow an attacker to achieve path traversal and remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42258',
      vendorProject: 'BQE',
      product: 'BillQuick Web Suite',
      vulnerabilityName: 'BQE BillQuick Web Suite SQL Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'BQE BillQuick Web Suite contains an SQL injection vulnerability when accessing the username parameter that may allow for unauthenticated, remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3452',
      vendorProject: 'Cisco',
      product:
        'Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD)',
      vulnerabilityName:
        'Cisco ASA and FTD Read-Only Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD) contain an improper input validation vulnerability when HTTP requests process URLs.  An attacker could exploit this vulnerability by sending a crafted HTTP request containing directory traversal character sequences to an affected device. A successful exploit could allow the attacker to view arbitrary files within the web services file system on the targeted device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3580',
      vendorProject: 'Cisco',
      product:
        'Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD)',
      vulnerabilityName:
        'Cisco ASA and FTD Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD) contain an insufficient input validation vulnerability for user-supplied input by the web services interface.  Successful exploitation could allow an attacker to perform cross-site scripting (XSS) in the context of the interface or access sensitive browser-based information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1497',
      vendorProject: 'Cisco',
      product: 'HyperFlex HX',
      vulnerabilityName:
        'Cisco HyperFlex HX Installer Virtual Machine Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco HyperFlex HX Installer Virtual Machine contains an insufficient input validation vulnerability which could allow an attacker to execute commands on an affected device as the\ufffdroot\ufffduser.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1498',
      vendorProject: 'Cisco',
      product: 'HyperFlex HX',
      vulnerabilityName:
        'Cisco HyperFlex HX Data Platform Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco HyperFlex HX Installer Virtual Machine contains an insufficient input validation vulnerability which could allow an attacker to execute commands on an affected device as the tomcat8 user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0171',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software Smart Install Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco IOS and IOS XE Software improperly validates packet data, allowing an unauthenticated, remote attacker to trigger a reload of an affected device, cause a denial-of-service (DoS) condition, or perform code execution on the affected device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3118',
      vendorProject: 'Cisco',
      product: 'IOS XR',
      vulnerabilityName:
        'Cisco IOS XR Software Discovery Protocol Format String Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco IOS XR improperly validates string input from certain fields in Cisco Discovery Protocol messages. Exploitation could allow an unauthenticated, adjacent attacker to execute code with administrative privileges or cause a reload on an affected device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3566',
      vendorProject: 'Cisco',
      product: 'IOS XR',
      vulnerabilityName:
        'Cisco IOS XR Software DVMRP Memory Exhaustion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco IOS XR Distance Vector Multicast Routing Protocol (DVMRP) incorrectly handles Internet Group Management Protocol (IGMP) packets. Exploitation could allow an unauthenticated, remote attacker to immediately crash the IGMP process or make it consume available memory and eventually crash.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3569',
      vendorProject: 'Cisco',
      product: 'IOS XR',
      vulnerabilityName:
        'Cisco IOS XR Software DVMRP Memory Exhaustion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco IOS XR Distance Vector Multicast Routing Protocol (DVMRP) incorrectly handles Internet Group Management Protocol (IGMP) packets. Exploitation could allow an unauthenticated, remote attacker to immediately crash the IGMP process or make it consume available memory and eventually crash.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3161',
      vendorProject: 'Cisco',
      product: 'Cisco IP Phones',
      vulnerabilityName:
        'Cisco IP Phones Web Server Remote Code Execution and Denial-of-Service Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco IP Phones contain an improper input validation vulnerability for HTTP requests. Exploitation could allow an attacker to execute code remotely with\ufffdroot\ufffdprivileges or cause a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1653',
      vendorProject: 'Cisco',
      product: 'Small Business RV320 and RV325 Routers',
      vulnerabilityName:
        'Cisco Small Business RV320 and RV325 Routers Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco Small Business RV320 and RV325 Dual Gigabit WAN VPN Routers contain improper access controls for URLs. Exploitation could allow an attacker to download the router configuration or detailed diagnostic information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0296',
      vendorProject: 'Cisco',
      product: 'Adaptive Security Appliance (ASA)',
      vulnerabilityName:
        'Cisco Adaptive Security Appliance (ASA) Denial-of-Service Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Cisco Adaptive Security Appliance (ASA) contains an improper input validation vulnerability with HTTP URLs. Exploitation could allow an attacker to cause a denial-of-service (DoS) condition or information disclosure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-13608',
      vendorProject: 'Citrix',
      product: 'StoreFront Server',
      vulnerabilityName:
        'Citrix StoreFront Server XML External Entity (XXE) Processing Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Citrix StoreFront Server contains an XML External Entity (XXE) processing vulnerability that may allow an unauthenticated attacker to retrieve potentially sensitive information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8193',
      vendorProject: 'Citrix',
      product:
        'Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance',
      vulnerabilityName:
        'Citrix ADC, Gateway, and SD-WAN WANOP Appliance Authorization Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an authorization bypass vulnerability that may allow unauthenticated access to certain URL endpoints. The attacker must have access to the NetScaler IP (NSIP) in order to perform exploitation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8195',
      vendorProject: 'Citrix',
      product:
        'Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance',
      vulnerabilityName:
        'Citrix ADC, Gateway, and SD-WAN WANOP Appliance Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an information disclosure vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8196',
      vendorProject: 'Citrix',
      product:
        'Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance',
      vulnerabilityName:
        'Citrix ADC, Gateway, and SD-WAN WANOP Appliance Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an information disclosure vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-19781',
      vendorProject: 'Citrix',
      product:
        'Application Delivery Controller (ADC), Gateway, and SD-WAN WANOP Appliance',
      vulnerabilityName:
        'Citrix ADC, Gateway, and SD-WAN WANOP Appliance Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Citrix ADC, Citrix Gateway, and multiple Citrix SD-WAN WANOP appliance models contain an unspecified vulnerability that could allow an unauthenticated attacker to perform code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11634',
      vendorProject: 'Citrix',
      product: 'Workspace Application and Receiver for Windows',
      vulnerabilityName:
        'Citrix Workspace Application and Receiver for Windows Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "Citrix Workspace Application and Receiver for Windows contains remote code execution vulnerability resulting from local drive access preferences not being enforced into the clients' local drives.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-29557',
      vendorProject: 'D-Link',
      product: 'DIR-825 R1 Devices',
      vulnerabilityName:
        'D-Link DIR-825 R1 Devices Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'D-Link DIR-825 R1 devices contain a buffer overflow vulnerability in the web interface that may allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-25506',
      vendorProject: 'D-Link',
      product: 'DNS-320 Device',
      vulnerabilityName:
        'D-Link DNS-320 Device Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'D-Link DNS-320 device contains a command injection vulnerability in the sytem_mgr.cgi component that may allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-15811',
      vendorProject: 'DotNetNuke (DNN)',
      product: 'DotNetNuke (DNN)',
      vulnerabilityName:
        'DotNetNuke (DNN) Inadequate Encryption Strength Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'DotNetNuke (DNN) contains an inadequate encryption strength vulnerability resulting from the use of a weak encryption algorithm to protect input parameters.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-18325',
      vendorProject: 'DotNetNuke (DNN)',
      product: 'DotNetNuke (DNN)',
      vulnerabilityName:
        'DotNetNuke (DNN) Inadequate Encryption Strength Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'DotNetNuke (DNN) contains an inadequate encryption strength vulnerability resulting from the use of a weak encryption algorithm to protect input parameters. This CVE ID resolves an incomplete patch for CVE-2018-15811.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-9822',
      vendorProject: 'DotNetNuke (DNN)',
      product: 'DotNetNuke (DNN)',
      vulnerabilityName: 'DotNetNuke (DNN) Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'DotNetNuke (DNN) contains a vulnerability that may allow for remote code execution via cookie deserialization.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-15752',
      vendorProject: 'Docker',
      product: 'Desktop Community Edition',
      vulnerabilityName:
        'Docker Desktop Community Edition Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Docker Desktop Community Edition contains a vulnerability that may allow local users to escalate privileges by placing a trojan horse docker-credential-wincred.exe file in %PROGRAMDATA%\\DockerDesktop\\version-bin\\.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8515',
      vendorProject: 'DrayTek',
      product: 'Multiple Vigor Routers',
      vulnerabilityName:
        'Multiple DrayTek Vigor Routers Web Management Page Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'DrayTek Vigor3900, Vigor2960, and Vigor300B routers contain an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-7600',
      vendorProject: 'Drupal',
      product: 'Drupal Core',
      vulnerabilityName: 'Drupal Core Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Drupal Core contains a remote code execution vulnerability that could allow an attacker to exploit multiple attack vectors on a Drupal site, resulting in complete site compromise.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22205',
      vendorProject: 'GitLab',
      product: 'Community and Enterprise Editions',
      vulnerabilityName:
        'GitLab Community and Enterprise Editions Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'GitHub Community and Enterprise Editions that utilize the ability to upload images through GitLab Workhorse are vulnerable to remote code execution. Workhorse passes image file extensions through ExifTool, which improperly validates the image files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-6789',
      vendorProject: 'Exim',
      product: 'Exim',
      vulnerabilityName: 'Exim Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Exim contains a buffer overflow vulnerability in the base64d function part of the SMTP listener that may allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8657',
      vendorProject: 'EyesOfNetwork',
      product: 'EyesOfNetwork',
      vulnerabilityName:
        'EyesOfNetwork Use of Hard-Coded Credentials Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'EyesOfNetwork contains a use of hard-coded credentials vulnerability, as it uses the same API key by default. Exploitation allows an attacker to calculate or guess the admin access token.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8655',
      vendorProject: 'EyesOfNetwork',
      product: 'EyesOfNetwork',
      vulnerabilityName:
        'EyesOfNetwork Improper Privilege Management Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'EyesOfNetwork contains an improper privilege management vulnerability that may allow a user to run commands as root via a crafted Nmap Scripting Engine (NSE) script to nmap7.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5902',
      vendorProject: 'F5',
      product: 'BIG-IP',
      vulnerabilityName:
        'F5 BIG-IP Traffic Management User Interface (TMUI) Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'F5 BIG-IP Traffic Management User Interface (TMUI) contains a remote code execution vulnerability in undisclosed pages.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22986',
      vendorProject: 'F5',
      product: 'BIG-IP and BIG-IQ Centralized Management',
      vulnerabilityName:
        'F5 BIG-IP and BIG-IQ Centralized Management iControl REST Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'F5 BIG-IP and BIG-IQ Centralized Management contain a remote code execution vulnerability in the iControl REST interface that allows unauthenticated attackers with network access to execute system commands, create or delete files, and disable services.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-35464',
      vendorProject: 'ForgeRock',
      product: 'Access Management (AM)',
      vulnerabilityName:
        'ForgeRock Access Management (AM) Core Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'ForgeRock Access Management (AM) Core Server allows an attacker who sends a specially crafted HTTP request to one of three endpoints (/ccversion/Version, /ccversion/Masthead, or /ccversion/ButtonFrame) to execute code in the context of the current user (unless ForgeRock AM is running as root user, which the vendor does not recommend).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-5591',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName: 'Fortinet FortiOS Default Configuration Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Fortinet FortiOS contains a default configuration vulnerability that may allow an unauthenticated attacker on the same subnet to intercept sensitive information by impersonating the Lightweight Directory Access Protocol (LDAP) server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-12812',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName:
        'Fortinet FortiOS SSL VPN Improper Authentication Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Fortinet FortiOS SSL VPN contains an improper authentication vulnerability that may allow a user to login successfully without being prompted for the second factor of authentication (FortiToken) if they change the case in their username.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-13379',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName:
        'Fortinet FortiOS SSL VPN Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Fortinet FortiOS SSL VPN web portal contains a path traversal vulnerability that may allow an unauthenticated attacker to download FortiOS system files through specially crafted HTTP resource requests.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-16010',
      vendorProject: 'Google',
      product: 'Chrome for Android UI',
      vulnerabilityName:
        'Google Chrome for Android UI Heap Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chrome for Android UI contains a heap buffer overflow vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-15999',
      vendorProject: 'Google',
      product: 'Chrome FreeType',
      vulnerabilityName:
        'Google Chrome FreeType Heap Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chrome uses FreeType, an open-source software library to render fonts, which contains a heap buffer overflow vulnerability in the function Load_SBit_Png when processing PNG images embedded into fonts. This vulnerability is part of an exploit chain with CVE-2020-17087 on Windows and CVE-2020-16010 on Android.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21166',
      vendorProject: 'Google',
      product: 'Chromium',
      vulnerabilityName: 'Google Chromium Race Condition Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium contains a race condition vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-16017',
      vendorProject: 'Google',
      product: 'Chrome',
      vulnerabilityName: 'Google Chrome Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chrome contains a use-after-free vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page.  ',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-37976',
      vendorProject: 'Google',
      product: 'Chromium',
      vulnerabilityName: 'Google Chromium Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium contains an information disclosure vulnerability within the core memory component that allows a remote attacker to obtain potentially sensitive information from process memory via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-16009',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30632',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Out-of-Bounds Write Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains an out-of-bounds write vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-16013',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName:
        'Google Chromium V8 Incorrect Implementation Vulnerabililty',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains an inappropriate implementation vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30633',
      vendorProject: 'Google',
      product: 'Chromium Indexed DB API',
      vulnerabilityName:
        'Google Chromium Indexed DB API Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium Indexed DB API contains a use-after-free vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21148',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName:
        'Google Chromium V8 Heap Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a heap buffer overflow vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-37973',
      vendorProject: 'Google',
      product: 'Chromium Portals',
      vulnerabilityName: 'Google Chromium Portals Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium Portals contains a use-after-free vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page. This vulnerability affects web browsers that utilize Chromium, including Google Chrome and Microsoft Edge.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30551',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-37975',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-6418',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30554',
      vendorProject: 'Google',
      product: 'Chromium WebGL',
      vulnerabilityName: 'Google Chromium WebGL Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium WebGL contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21206',
      vendorProject: 'Google',
      product: 'Chromium Blink',
      vulnerabilityName: 'Google Chromium Blink Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium Blink contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38000',
      vendorProject: 'Google',
      product: 'Chromium Intents',
      vulnerabilityName:
        'Google Chromium Intents Improper Input Validation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium Intents contains an improper input validation vulnerability that allows a remote attacker to arbitrarily browser to a malicious URL via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38003',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine has a bug in JSON.stringify, where the internal TheHole value can leak to script code, causing memory corruption. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21224',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to execute code inside a sandbox via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21193',
      vendorProject: 'Google',
      product: 'Chromium Blink',
      vulnerabilityName: 'Google Chromium Blink Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium Blink contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21220',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName:
        'Google Chromium V8 Improper Input Validation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains an improper input validation vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30563',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-4430',
      vendorProject: 'IBM',
      product: 'Data Risk Manager',
      vulnerabilityName:
        'IBM Data Risk Manager Directory Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'IBM Data Risk Manager contains a directory traversal vulnerability that could allow a remote authenticated attacker to traverse directories and send a specially crafted URL request to download arbitrary files from the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-4427',
      vendorProject: 'IBM',
      product: 'Data Risk Manager',
      vulnerabilityName: 'IBM Data Risk Manager Security Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'IBM Data Risk Manager contains a security bypass vulnerability that could allow a remote attacker to bypass security restrictions when configured with SAML authentication. By sending a specially crafted HTTP request, an attacker could exploit this vulnerability to bypass the authentication process and gain full administrative access to the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-4428',
      vendorProject: 'IBM',
      product: 'Data Risk Manager',
      vulnerabilityName:
        'IBM Data Risk Manager Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'IBM Data Risk Manager contains an unspecified vulnerability which could allow a remote, authenticated attacker to execute commands on the system.\ufffd',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-4716',
      vendorProject: 'IBM',
      product: 'Planning Analytics',
      vulnerabilityName:
        'IBM Planning Analytics Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'IBM Planning Analytics is vulnerable to a configuration overwrite that allows an unauthenticated user to login as "admin", and then execute code as root or SYSTEM via TM1 scripting.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3715',
      vendorProject: 'ImageMagick',
      product: 'ImageMagick',
      vulnerabilityName: 'ImageMagick Arbitrary File Deletion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "ImageMagick contains an unspecified vulnerability that could allow users to delete files by using ImageMagick's 'ephemeral' pseudo protocol, which deletes files after reading.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3718',
      vendorProject: 'ImageMagick',
      product: 'ImageMagick',
      vulnerabilityName:
        'ImageMagick Server-Side Request Forgery (SSRF) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'ImageMagick contains an unspecified vulnerability that allows attackers to perform server-side request forgery (SSRF) via a crafted image.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-15505',
      vendorProject: 'Ivanti',
      product: 'MobileIron Multiple Products',
      vulnerabilityName:
        'Ivanti MobileIron Multiple Products Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "Ivanti MobileIron's Core & Connector, Sentry, and Monitor and Reporting Database (RDB) products contain an unspecified vulnerability that allows for remote code execution.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30116',
      vendorProject: 'Kaseya',
      product: 'Virtual System/Server Administrator (VSA)',
      vulnerabilityName:
        'Kaseya Virtual System/Server Administrator (VSA) Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Kaseya Virtual System/Server Administrator (VSA) contains an information disclosure vulnerability allowing an attacker to obtain the sessionId that can be used to execute further attacks against the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-7961',
      vendorProject: 'Liferay',
      product: 'Liferay Portal',
      vulnerabilityName:
        'Liferay Portal Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Liferay Portal contains a deserialization of untrusted data vulnerability that allows remote attackers to execute code via JSON web services.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-23874',
      vendorProject: 'McAfee',
      product: 'McAfee Total Protection (MTP)',
      vulnerabilityName:
        'McAfee Total Protection (MTP) Improper Privilege Management Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'McAfee Total Protection (MTP) contains an improper privilege management vulnerability that allows a local user to gain elevated privileges and execute code, bypassing MTP self-defense.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22506',
      vendorProject: 'Micro Focus',
      product: 'Micro Focus Access Manager',
      vulnerabilityName:
        'Micro Focus Access Manager Information Leakage Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Micro Focus Access Manager contains an information leakage vulnerability resulting from a SAML service provider redirection issue when the Assertion Consumer Service URL is used.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22502',
      vendorProject: 'Micro Focus',
      product: 'Operation Bridge Reporter (OBR)',
      vulnerabilityName:
        'Micro Focus Operation Bridge Report (OBR) Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Micro Focus Operation Bridge Report (OBR) contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-1812',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Group Policy Preferences Password Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Active Directory contains a privilege escalation vulnerability due to the way it distributes passwords that are configured using Group Policy preferences. An authenticated attacker who successfully exploits the vulnerability could decrypt the passwords and use them to elevate privileges on the domain.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38647',
      vendorProject: 'Microsoft',
      product: 'Open Management Infrastructure (OMI)',
      vulnerabilityName:
        'Microsoft Open Management Infrastructure (OMI) Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Open Management Infrastructure (OMI) within Azure VM Management Extensions contains an unspecified vulnerability allowing remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0167',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation via a crafted application',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0878',
      vendorProject: 'Microsoft',
      product: 'Edge and Internet Explorer',
      vulnerabilityName:
        'Microsoft Edge and Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Edge and Internet Explorer contain a memory corruption vulnerability that allows attackers to execute code in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31955',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Kernel contains an unspecified vulnerability that allows for information disclosure. Successful exploitation allows attackers to read the contents of kernel memory from a user-mode process.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1647',
      vendorProject: 'Microsoft',
      product: 'Defender',
      vulnerabilityName:
        'Microsoft Defender Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Defender contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-33739',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Desktop Window Manager (DWM) Core Library Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Desktop Window Manager (DWM) Core Library contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0185',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Media Center Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Media Center contains a remote code execution vulnerability when Windows Media Center opens a specially crafted Media Center link (.mcl) file that references malicious code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0683',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Installer Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Installer contains a privilege escalation vulnerability when MSI packages process symbolic links, which allows attackers to bypass access restrictions to add or remove files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-17087',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows kernel contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-33742',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows MSHTML Platform Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows MSHTML Platform contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31199',
      vendorProject: 'Microsoft',
      product: 'Enhanced Cryptographic Provider',
      vulnerabilityName:
        'Microsoft Enhanced Cryptographic Provider Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Enhanced Cryptographic Provider contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-33771',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows kernel contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31956',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows NTFS Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows New Technology File System (NTFS) contains an unspecified vulnerability that allows attackers to escalate privileges via a specially crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31201',
      vendorProject: 'Microsoft',
      product: 'Enhanced Cryptographic Provider',
      vulnerabilityName:
        'Microsoft Enhanced Cryptographic Provider Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Enhanced Cryptographic Provider contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31979',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows kernel contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0938',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Adobe Font Manager Library Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Adobe Font Manager Library contains an unspecified vulnerability when handling specially crafted multi-master fonts (Adobe Type 1 PostScript format) that allows for remote code execution for all systems except Windows 10. For systems running Windows 10, an attacker who successfully exploited the vulnerability could execute code in an AppContainer sandbox context with limited privileges and capabilities.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-17144',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server improperly validates cmdlet arguments which allow an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0986',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows kernel contains an unspecified vulnerability when handling objects in memory that allows attackers to escalate privileges and execute code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1020',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Adobe Font Manager Library Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Adobe Font Manager Library contains an unspecified vulnerability when handling specially crafted multi-master fonts (Adobe Type 1 PostScript format) that allows for remote code execution for all systems except Windows 10. For systems running Windows 10, an attacker who successfully exploited the vulnerability could execute code in an AppContainer sandbox context with limited privileges and capabilities.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38645',
      vendorProject: 'Microsoft',
      product: 'Open Management Infrastructure (OMI)',
      vulnerabilityName:
        'Microsoft Open Management Infrastructure (OMI) Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Open Management Infrastructure (OMI) within Azure VM Management Extensions contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-34523',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-7269',
      vendorProject: 'Microsoft',
      product: 'Internet Information Services (IIS)',
      vulnerabilityName:
        'Microsoft Windows Server Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Server 2003 R2 contains a buffer overflow vulnerability in Internet Information Services (IIS) 6.0 which allows remote attackers to execute code via a long header beginning with "If: <http://" in a PROPFIND request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36948',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Update Medic Service Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Update Medic Service contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38649',
      vendorProject: 'Microsoft',
      product: 'Open Management Infrastructure (OMI)',
      vulnerabilityName:
        'Microsoft Open Management Infrastructure (OMI) Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Open Management Infrastructure (OMI) within Azure VM Management Extensions contains an unspecified vulnerability allowing privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0688',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Validation Key Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server Validation Key fails to properly create unique keys at install time, allowing for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0143',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Server Message Block (SMBv1) Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Server Message Block 1.0 (SMBv1) contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7255',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k kernel-mode driver fails to properly handle objects in memory which allows for privilege escalation. Successful exploitation allows an attacker to run code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0708',
      vendorProject: 'Microsoft',
      product: 'Remote Desktop Services',
      vulnerabilityName:
        'Microsoft Remote Desktop Services Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Remote Desktop Services, formerly known as Terminal Service, contains an unspecified vulnerability that allows an unauthenticated attacker to connect to the target system using RDP and send specially crafted requests. Successful exploitation allows for remote code execution. The vulnerability is also known under the moniker of BlueKeep.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-34473',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1464',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Spoofing Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows contains a spoofing vulnerability when Windows incorrectly validates file signatures, allowing an attacker to bypass security features and load improperly signed files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1732',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-34527',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Print Spooler Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Print Spooler contains an unspecified vulnerability due to the Windows Print Spooler service improperly performing privileged file operations. Successful exploitation allows an attacker to perform remote code execution with SYSTEM privileges. The vulnerability is also known under the moniker of PrintNightmare.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-07-20',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-04 (https://www.cisa.gov/news-events/directives/ed-21-04-mitigate-windows-print-spooler-service-vulnerability) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-04.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31207',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Security Feature Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for security feature bypass.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0803',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability due to it failing to properly handle objects in memory causing privilege escalation. Successful exploitation allows an attacker to run code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1040',
      vendorProject: 'Microsoft',
      product: 'Hyper-V RemoteFX',
      vulnerabilityName:
        'Microsoft Hyper-V RemoteFX vGPU Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Hyper-V RemoteFX vGPU contains an improper input validation vulnerability due to the host server failing to properly validate input from an authenticated user on a guest operating system. Successful exploitation allows for remote code execution on the host operating system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-28310',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1350',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows DNS Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows DNS Servers fail to properly handle requests, allowing an attacker to perform remote code execution in the context of the Local System Account. The vulnerability is also known under the moniker of SIGRed.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2020-07-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 20-03 (https://www.cisa.gov/news-events/directives/ed-20-03-mitigate-windows-dns-server-remote-code-execution-vulnerability-july-2020-patch-tuesday) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 20-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-26411',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains an unspecified vulnerability that allows for memory corruption.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0859',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k fails to properly handle objects in memory causing privilege escalation. Successful exploitation allows an attacker to run code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40444',
      vendorProject: 'Microsoft',
      product: 'MSHTML',
      vulnerabilityName: 'Microsoft MSHTML Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft MSHTML contains a unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-8759',
      vendorProject: 'Microsoft',
      product: '.NET Framework',
      vulnerabilityName:
        'Microsoft .NET Framework Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft .NET Framework contains a remote code execution vulnerability when processing untrusted input that could allow an attacker to take control of an affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8653',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability due to how the Scripting Engine handles objects in memory, leading to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0797',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k contains a privilege escalation vulnerability when the Win32k component fails to properly handle objects in memory. Successful exploitation allows an attacker to execute code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36942',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Local Security Authority (LSA) Spoofing Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Local Security Authority (LSA) contains a spoofing vulnerability allowing an unauthenticated attacker to call a method on the LSARPC interface and coerce the domain controller to authenticate against another server using NTLM.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1215',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows contains an unspecified vulnerability due to the way ws2ifsl.sys (Winsock) handles objects in memory, allowing for privilege escalation. Successful exploitation allows an attacker to execute code with elevated privileges.\ufffd',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0798',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office contains a memory corruption vulnerability due to the way objects are handled in memory. Successful exploitation allows for remote code execution in the context of the current user. This vulnerability is known to be chained with CVE-2018-0802.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0802',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office contains a memory corruption vulnerability due to the way objects are handled in memory. Successful exploitation allows for remote code execution in the context of the current user. This vulnerability is known to be chained with CVE-2018-0798.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0158',
      vendorProject: 'Microsoft',
      product: 'MSCOMCTL.OCX',
      vulnerabilityName:
        'Microsoft MSCOMCTL.OCX Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft MSCOMCTL.OCX contains an unspecified vulnerability that allows for remote code execution, allowing an attacker to take complete control of an affected system under the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1641',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office contains a memory corruption vulnerability due to failure to properly handle rich text format files in memory. Successful exploitation allows for remote code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27085',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0541',
      vendorProject: 'Microsoft',
      product: 'MSHTML',
      vulnerabilityName: 'Microsoft MSHTML Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft MSHTML engine contains an improper input validation vulnerability that allows for remote code execution vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-11882',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office contains a memory corruption vulnerability that allows remote code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0674',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability due to the way the Scripting Engine handles objects in memory. Successful exploitation could allow remote code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27059',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1367',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability in how the scripting engine handles objects in memory. Successful exploitation allows for remote code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0199',
      vendorProject: 'Microsoft',
      product: 'Office and WordPad',
      vulnerabilityName:
        'Microsoft Office and WordPad Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office and WordPad contain an unspecified vulnerability due to the way the applications parse specially crafted files. Successful exploitation allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1380',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability which can allow for remote code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1429',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability which can allow for remote code execution in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-11774',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Outlook Security Feature Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office Outlook contains a security feature bypass vulnerability due to improperly handling objects in memory. Successful exploitation allows an attacker to execute commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0968',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability due to how the Scripting Engine handles objects in memory, leading to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1472',
      vendorProject: 'Microsoft',
      product: 'Netlogon',
      vulnerabilityName:
        'Microsoft Netlogon Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "Microsoft's Netlogon Remote Protocol (MS-NRPC) contains a privilege escalation vulnerability when an attacker establishes a vulnerable Netlogon secure channel connection to a domain controller. An attacker who successfully exploits the vulnerability could run a specially crafted application on a device on the network. The vulnerability is also known under the moniker of Zerologon.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2020-09-21',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 20-04 (https://www.cisa.gov/news-events/directives/ed-20-04-mitigate-netlogon-elevation-privilege-vulnerability-august-2020-patch-tuesday) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 20-04.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-26855',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for remote code execution. This vulnerability is part of the ProxyLogon exploit chain.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-16',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-02 (https://www.cisa.gov/news-events/directives/ed-21-02-mitigate-microsoft-exchange-premises-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-02.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-26858',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for remote code execution. This vulnerability is part of the ProxyLogon exploit chain.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-16',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-02 (https://www.cisa.gov/news-events/directives/ed-21-02-mitigate-microsoft-exchange-premises-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-02.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27065',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for remote code execution. This vulnerability is part of the ProxyLogon exploit chain.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-16',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-02 (https://www.cisa.gov/news-events/directives/ed-21-02-mitigate-microsoft-exchange-premises-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-02.",
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1054',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k contains a privilege escalation vulnerability when the Windows kernel-mode driver fails to properly handle objects in memory. Successful exploitation allows an attacker to execute code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1675',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Print Spooler Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Print Spooler contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-34448',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Scripting Engine contains an unspecified vulnerability that allows for memory corruption.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0601',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows CryptoAPI Spoofing Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows CryptoAPI (Crypt32.dll) contains a spoofing vulnerability in the way it validates Elliptic Curve Cryptography (ECC) certificates. An attacker could exploit the vulnerability by using a spoofed code-signing certificate to sign a malicious executable, making it appear the file was from a trusted, legitimate source. A successful exploit could also allow the attacker to conduct man-in-the-middle attacks and decrypt confidential information on user connections to the affected software. The vulnerability is also known under the moniker of CurveBall.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2020-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 20-02 (https://www.cisa.gov/news-events/directives/ed-20-02-mitigate-windows-vulnerabilities-january-2020-patch-tuesday) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 20-02.",
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0604',
      vendorProject: 'Microsoft',
      product: 'SharePoint',
      vulnerabilityName:
        'Microsoft SharePoint Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft SharePoint fails to check the source markup of an application package. An attacker who successfully exploits the vulnerability could run remote code in the context of the SharePoint application pool and the SharePoint server farm account.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0646',
      vendorProject: 'Microsoft',
      product: '.NET Framework',
      vulnerabilityName:
        'Microsoft .NET Framework Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft .NET Framework contains an improper input validation vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0808',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Win32k contains a privilege escalation vulnerability due to the component failing to properly handle objects in memory. Successful exploitation allows an attacker to run code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-26857',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for remote code execution. This vulnerability is part of the ProxyLogon exploit chain.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-16',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-02 (https://www.cisa.gov/news-events/directives/ed-21-02-mitigate-microsoft-exchange-premises-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-02.",
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1147',
      vendorProject: 'Microsoft',
      product: '.NET Framework, SharePoint, Visual Studio',
      vulnerabilityName:
        'Microsoft .NET Framework, SharePoint, and Visual Studio Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft .NET Framework, Microsoft SharePoint, and Visual Studio contain a remote code execution vulnerability when the software fails to check the source markup of XML file input. Successful exploitation allows an attacker to execute code in the context of the process responsible for deserialization of the XML content.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1214',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Privilege Common Log File System (CLFS) Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Common Log File System (CLFS) driver improperly handles objects in memory which can allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3235',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office OLE DLL Side Loading Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Office Object Linking & Embedding (OLE) dynamic link library (DLL) contains a side loading vulnerability due to it improperly validating input before loading libraries. Successful exploitation allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0863',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Error Reporting (WER) Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Error Reporting (WER) contains a privilege escalation vulnerability due to the way it handles files, allowing for code execution in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36955',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Common Log File System (CLFS) Driver Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Windows Common Log File System (CLFS) driver contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38648',
      vendorProject: 'Microsoft',
      product: 'Open Management Infrastructure (OMI)',
      vulnerabilityName:
        'Microsoft Open Management Infrastructure (OMI) Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Microsoft Open Management Infrastructure (OMI) within Azure VM Management Extensions contains an unspecified vulnerability allowing privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-6819',
      vendorProject: 'Mozilla',
      product: 'Firefox and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox And Thunderbird Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Mozilla Firefox and Thunderbird contain a race condition vulnerability when running the nsDocShell destructor under certain conditions. The race condition creates a use-after-free vulnerability, causing unspecified impacts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-6820',
      vendorProject: 'Mozilla',
      product: 'Firefox and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox And Thunderbird Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Mozilla Firefox and Thunderbird contain a race condition vulnerability when handling a ReadableStream under certain conditions. The race condition creates a use-after-free vulnerability, causing unspecified impacts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-17026',
      vendorProject: 'Mozilla',
      product: 'Firefox and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox And Thunderbird Type Confusion Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Mozilla Firefox and Thunderbird contain a type confusion vulnerability due to incorrect alias information in the IonMonkey JIT compiler when setting array elements.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-15949',
      vendorProject: 'Nagios',
      product: 'Nagios XI',
      vulnerabilityName: 'Nagios XI Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Nagios XI contains a remote code execution vulnerability in which a user can modify the check_plugin executable and insert malicious commands to execute as root.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-26919',
      vendorProject: 'NETGEAR',
      product: 'JGS516PE Devices',
      vulnerabilityName:
        'Netgear JGS516PE Devices Missing Function Level Access Control Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Netgear JGS516PE devices contain a missing function level access control vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-19356',
      vendorProject: 'Netis',
      product: 'WF2419 Devices',
      vulnerabilityName:
        'Netis WF2419 Devices Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "Netis WF2419 devices contains an unspecified vulnerability that allows an attacker to perform remote code execution as root through the router's web management page.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-2555',
      vendorProject: 'Oracle',
      product: 'Multiple Products',
      vulnerabilityName:
        'Oracle Multiple Products Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Multiple Oracle products contain a remote code execution vulnerability that allows an unauthenticated attacker with network access via T3 or HTTP to takeover the affected system. Impacted Oracle products: Oracle Coherence in Fusion Middleware, Oracle Utilities Framework, Oracle Retail Assortment Planning, Oracle Commerce, Oracle Communications Diameter Signaling Router (DSR).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-3152',
      vendorProject: 'Oracle',
      product: 'Fusion Middleware',
      vulnerabilityName: 'Oracle Fusion Middleware Unspecified Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Oracle Fusion Middleware Reports Developer contains an unspecified vulnerability that allows remote attackers to affect confidentiality and integrity of affected systems.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-14871',
      vendorProject: 'Oracle',
      product: 'Solaris and Zettabyte File System (ZFS)',
      vulnerabilityName:
        'Oracle Solaris and Zettabyte File System (ZFS) Unspecified Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Oracle Solaris and Oracle ZFS Storage Appliance Kit contain an unspecified vulnerability causing high impacts to confidentiality, integrity, and availability of affected systems.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-4852',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName:
        'Oracle WebLogic Server Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Oracle WebLogic Server contains a deserialization of untrusted data vulnerability within Apache Commons, which can allow for for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-14750',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName:
        'Oracle WebLogic Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Oracle WebLogic Server contains an unspecified vulnerability allowing an unauthenticated attacker to perform remote code execution. This vulnerability is related to CVE-2020-14882.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-14882',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName:
        'Oracle WebLogic Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Oracle WebLogic Server contains an unspecified vulnerability, which is assessed to allow for remote code execution, based on this vulnerability being related to CVE-2020-14750.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-14883',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName: 'Oracle WebLogic Server Unspecified Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Oracle WebLogic Server contains an unspecified vulnerability in the Console component with high impacts to confidentilaity, integrity, and availability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8644',
      vendorProject: 'PlaySMS',
      product: 'PlaySMS',
      vulnerabilityName: 'PlaySMS Server-Side Template Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'PlaySMS contains a server-side template injection vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-18935',
      vendorProject: 'Progress',
      product: 'Telerik UI for ASP.NET AJAX',
      vulnerabilityName:
        'Progress Telerik UI for ASP.NET AJAX Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Progress Telerik UI for ASP.NET AJAX contains a deserialization of untrusted data vulnerability through RadAsyncUpload which leads to code execution on the server in the context of the w3wp.exe process.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22893',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure contains a use-after-free vulnerability that allow a remote, unauthenticated attacker to execute code via license services.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8243',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure contains an unspecified vulnerability in the admin web interface that could allow an authenticated attacker to upload a custom template to perform code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22900',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Unrestricted File Upload Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure contains an unrestricted file upload vulnerability that allows an authenticated administrator to perform a file write via a maliciously crafted archive upload in the administrator web interface.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22894',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Collaboration Suite Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure Collaboration Suite contains a buffer overflow vulnerabilities that allows a remote authenticated users to execute code as the root user via maliciously crafted meeting room.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8260',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Pulse Connect Secure contains an unspecified vulnerability that allows an authenticated attacker to perform code execution using uncontrolled gzip extraction.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22899',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure contains a command injection vulnerability that allows remote authenticated users to perform remote code execution via Windows File Resource Profiles.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11510',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure Arbitrary File Read Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure contains an arbitrary file read vulnerability that allows an unauthenticated remote attacker with network access via HTTPS to send a specially crafted URI.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-04-23',
      knownRansomwareCampaignUse: 'Known',
      notes:
        "Reference CISA's ED 21-03 (https://www.cisa.gov/news-events/directives/ed-21-03-mitigate-pulse-connect-secure-product-vulnerabilities) for further guidance and requirements. Note: The due date for addressing this vulnerability aligns with the requirements outlined in ED 21-03.",
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11539',
      vendorProject: 'Ivanti',
      product: 'Pulse Connect Secure and Pulse Policy Secure',
      vulnerabilityName:
        'Ivanti Pulse Connect Secure and Policy Secure Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Ivanti Pulse Connect Secure and Policy Secure allows an authenticated attacker from the admin web interface to inject and execute commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1906',
      vendorProject: 'Qualcomm',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Detection of Error Condition Without Action Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Multiple Qualcomm chipsets contain a detection of error condition without action vulnerability when improper handling of address deregistration on failure can lead to new GPU address allocation failure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1905',
      vendorProject: 'Qualcomm',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Multiple Qualcomm Chipsets contain a use after free vulnerability due to improper handling of memory mapping of multiple processes simultaneously.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-10221',
      vendorProject: 'rConfig',
      product: 'rConfig',
      vulnerabilityName: 'rConfig OS Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'rConfig lib/ajaxHandlers/ajaxAddTemplate.php contains an OS command injection vulnerability that allows remote attackers to execute OS commands via shell metacharacters in the fileName POST parameter.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-35395',
      vendorProject: 'Realtek',
      product: 'AP-Router SDK',
      vulnerabilityName: 'Realtek AP-Router SDK Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Realtek AP-Router SDK HTTP web server \ufffdboa\ufffd contains a buffer overflow vulnerability due to unsafe copies of some overly long parameters submitted in the form that lead to denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-16651',
      vendorProject: 'Roundcube',
      product: 'Roundcube Webmail',
      vulnerabilityName: 'Roundcube Webmail File Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Roundcube Webmail contains a file disclosure vulnerability caused by insufficient input validation in conjunction with file-based attachment plugins, which are used by default.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-11652',
      vendorProject: 'SaltStack',
      product: 'Salt',
      vulnerabilityName: 'SaltStack Salt Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SaltStack Salt contains a path traversal vulnerability in the salt-master process ClearFuncs which allows directory access to authenticated users. Salt users who follow fundamental internet security guidelines and best practices are not affected by this vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-11651',
      vendorProject: 'SaltStack',
      product: 'Salt',
      vulnerabilityName: 'SaltStack Salt Authentication Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SaltStack Salt contains an authentication bypass vulnerability in the salt-master process ClearFuncs due to improperly validating method calls. The vulnerability allows a remote user to access some methods without authentication, which can be used to retrieve user tokens from the salt master and/or run commands on salt minions. Salt users who follow fundamental internet security guidelines and best practices are not affected by this vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-16846',
      vendorProject: 'SaltStack',
      product: 'Salt',
      vulnerabilityName: 'SaltStack Salt Shell Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SaltStack Salt allows an unauthenticated user with network access to the Salt API to use shell injections to run code on the Salt API using the SSH client. This vulnerability affects any users running the Salt API.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-2380',
      vendorProject: 'SAP',
      product: 'Customer Relationship Management (CRM)',
      vulnerabilityName:
        'SAP Customer Relationship Management (CRM) Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SAP Customer Relationship Management (CRM) contains a path traversal vulnerability that allows an attacker to exploit insufficient validation of path information provided by users.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-5326',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName: 'SAP NetWeaver Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SAP NetWeaver Application Server Java Platforms Invoker Servlet does not require authentication, allowing for remote code execution via a HTTP or HTTPS request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-9563',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName:
        'SAP NetWeaver XML External Entity (XXE) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SAP NetWeaver Application Server Java Platforms contains an unspecified vulnerability in BC-BMT-BPM-DSK which allows remote, authenticated users to conduct XML External Entity (XXE) attacks.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-6287',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName:
        'SAP NetWeaver Missing Authentication for Critical Function Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SAP NetWeaver Application Server Java Platforms contains a missing authentication for critical function vulnerability allowing unauthenticated access to execute configuration tasks and create administrative users.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-6207',
      vendorProject: 'SAP',
      product: 'Solution Manager',
      vulnerabilityName:
        'SAP Solution Manager Missing Authentication for Critical Function Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SAP Solution Manager User Experience Monitoring contains a missing authentication for critical function vulnerability which results in complete compromise of all SMDAgents connected to the Solution Manager.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3976',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName: 'SAP NetWeaver Directory Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SAP NetWeaver Application Server Java Platforms contains a directory traversal vulnerability via a ..\\ (dot dot backslash) in the fileName parameter to CrashFileDownloadServlet. This allows remote attackers to read files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-16256',
      vendorProject: 'SIMalliance',
      product: 'Toolbox Browser',
      vulnerabilityName:
        'SIMalliance Toolbox Browser Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SIMalliance Toolbox Browser contains an command injection vulnerability that could allow remote attackers to retrieve location and IMEI information or execute a range of other attacks by modifying the attack message.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-10148',
      vendorProject: 'SolarWinds',
      product: 'Orion',
      vulnerabilityName: 'SolarWinds Orion Authentication Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SolarWinds Orion API contains an authentication bypass vulnerability that could allow a remote attacker to execute API commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-35211',
      vendorProject: 'SolarWinds',
      product: 'Serv-U',
      vulnerabilityName:
        'SolarWinds Serv-U Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SolarWinds Serv-U contains an unspecified memory escape vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3643',
      vendorProject: 'SolarWinds',
      product: 'Virtualization Manager',
      vulnerabilityName:
        'SolarWinds Virtualization Manager Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SolarWinds Virtualization Manager allows for privilege escalation through leveraging a misconfiguration of sudo.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-10199',
      vendorProject: 'Sonatype',
      product: 'Nexus Repository',
      vulnerabilityName:
        'Sonatype Nexus Repository Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Sonatype Nexus Repository contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20021',
      vendorProject: 'SonicWall',
      product: 'SonicWall Email Security',
      vulnerabilityName:
        'SonicWall Email Security Improper Privilege Management Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SonicWall Email Security contains an improper privilege management vulnerability that allows an attacker to create an administrative account by sending a crafted HTTP request to the remote host. This vulnerability has known usage in a SonicWall Email Security exploit chain along with CVE-2021-20022 and CVE-2021-20023 to achieve privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7481',
      vendorProject: 'SonicWall',
      product: 'SMA100',
      vulnerabilityName: 'SonicWall SMA100 SQL Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SonicWall SMA100 contains a SQL injection vulnerability allowing an unauthenticated user to gain read-only access to unauthorized resources.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20022',
      vendorProject: 'SonicWall',
      product: 'SonicWall Email Security',
      vulnerabilityName:
        'SonicWall Email Security Unrestricted Upload of File Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SonicWall Email Security contains an unrestricted upload of file with dangerous type vulnerability that allows a post-authenticated attacker to upload a file to the remote host. This vulnerability has known usage in a SonicWall Email Security exploit chain along with CVE-2021-20021 and CVE-2021-20023 to achieve privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20023',
      vendorProject: 'SonicWall',
      product: 'SonicWall Email Security',
      vulnerabilityName:
        'SonicWall Email Security Path Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SonicWall Email Security contains a path traversal vulnerability that allows a post-authenticated attacker to read files on the remote host. This vulnerability has known usage in a SonicWall Email Security exploit chain along with CVE-2021-20021 and CVE-2021-20022 to achieve privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20016',
      vendorProject: 'SonicWall',
      product: 'SSLVPN SMA100',
      vulnerabilityName: 'SonicWall SSLVPN SMA100 SQL Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'SonicWall SSLVPN SMA100 contains a SQL injection vulnerability that allows remote exploitation for credential access by an unauthenticated attacker.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-12271',
      vendorProject: 'Sophos',
      product: 'SFOS',
      vulnerabilityName: 'Sophos SFOS SQL Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Sophos Firewall operating system (SFOS) firmware contains a SQL injection vulnerability when configured with either the administration (HTTPS) service or the User Portal is exposed on the WAN zone. Successful exploitation may cause remote code execution to exfiltrate usernames and hashed passwords for the local device admin(s), portal admins, and user accounts used for remote access (but not external Active Directory or LDAP passwords).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-10181',
      vendorProject: 'Sumavision',
      product: 'Enhanced Multimedia Router (EMR)',
      vulnerabilityName:
        'Sumavision EMR Cross-Site Request Forgery (CSRF) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Sumavision Enhanced Multimedia Router (EMR) contains a cross-site request forgery (CSRF) vulnerability allowing the creation of users with elevated privileges as administrator on a device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6327',
      vendorProject: 'Symantec',
      product: 'Symantec Messaging Gateway',
      vulnerabilityName:
        'Symantec Messaging Gateway Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Symantec Messaging Gateway contains an unspecified vulnerability which can allow for remote code execution. With the ability to perform remote code execution, an attacker may also desire to perform privilege escalating actions.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-18988',
      vendorProject: 'TeamViewer',
      product: 'Desktop',
      vulnerabilityName: 'TeamViewer Desktop Bypass Remote Login Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        "TeamViewer Desktop allows for bypass of remote-login access control because the same AES key is used for different customers' installations. If an attacker were to know this key, they could decrypt protected information stored in registry or configuration files or decryption of the Unattended Access password to the system (which allows for remote login to the system).",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-9248',
      vendorProject: 'Progress',
      product: 'ASP.NET AJAX and Sitefinity',
      vulnerabilityName:
        'Progress Telerik UI for ASP.NET AJAX and Sitefinity Cryptographic Weakness Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Progress Telerik UI for ASP.NET AJAX and Sitefinity have a cryptographic weakness in Telerik.Web.UI.dll that can be exploited to disclose encryption keys (Telerik.Web.UI.DialogParametersEncryptionKey and/or the MachineKey), perform cross-site-scripting (XSS) attacks, compromise the ASP.NET ViewState, and/or upload and download files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31755',
      vendorProject: 'Tenda',
      product: 'AC11 Router',
      vulnerabilityName:
        'Tenda AC11 Router Stack Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Tenda AC11 devices contain a stack buffer overflow vulnerability in /goform/setmac which allows attackers to execute code via a crafted post request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-10987',
      vendorProject: 'Tenda',
      product: 'AC1900 Router AC15 Model',
      vulnerabilityName:
        'Tenda AC1900 Router AC15 Model Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Tenda AC1900 Router AC15 Model contains an unspecified vulnerability that allows remote attackers to execute system commands via the deviceName POST parameter.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-14558',
      vendorProject: 'Tenda',
      product: 'AC7, AC9, and AC10 Routers',
      vulnerabilityName:
        'Tenda AC7, AC9, and AC10 Routers Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Tenda AC7, AC9, and AC10 devices contain a command injection vulnerability due to  the "formsetUsbUnload" function executes a dosystemCmd function with untrusted input. Successful exploitation allows an attacker to execute OS commands via a crafted goform/setUsbUnload request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-20062',
      vendorProject: 'ThinkPHP',
      product: 'noneCms',
      vulnerabilityName:
        'ThinkPHP "noneCms" Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'ThinkPHP "noneCms" contains an unspecified vulnerability that allows for remote code execution through crafted use of the filter parameter.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-9082',
      vendorProject: 'ThinkPHP',
      product: 'ThinkPHP',
      vulnerabilityName: 'ThinkPHP Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'ThinkPHP contains an unspecified vulnerability that allows for remote code execution via public//?s=index/\\think\\app/invokefunction&function=call_user_func_array&vars[0]=system&vars[1][]= followed by the command.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-18187',
      vendorProject: 'Trend Micro',
      product: 'OfficeScan',
      vulnerabilityName:
        'Trend Micro OfficeScan Directory Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro OfficeScan contains a directory traversal vulnerability by extracting files from a zip file to a specific folder on the OfficeScan server, leading to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8467',
      vendorProject: 'Trend Micro',
      product: 'Apex One and OfficeScan',
      vulnerabilityName:
        'Trend Micro Apex One and OfficeScan Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro Apex One and OfficeScan contain an unspecified vulnerability within a migration tool component that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8468',
      vendorProject: 'Trend Micro',
      product: 'Apex One, OfficeScan and Worry-Free Business Security Agents',
      vulnerabilityName:
        'Trend Micro Multiple Products Content Validation Escape Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro Apex One, OfficeScan, and Worry-Free Business Security agents contain a content validation escape vulnerability that could allow an attacker to manipulate certain agent client components.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-24557',
      vendorProject: 'Trend Micro',
      product: 'Apex One, OfficeScan, and Worry-Free Business Security',
      vulnerabilityName:
        'Trend Micro Multiple Products Improper Access Control Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro Apex One, OfficeScan, and Worry-Free Business Security on Microsoft Windows contain an improper access control vulnerability that may allow an attacker to manipulate a particular product folder to disable the security temporarily, abuse a specific Windows function, and attain privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8599',
      vendorProject: 'Trend Micro',
      product: 'Apex One and OfficeScan',
      vulnerabilityName:
        'Trend Micro Apex One and OfficeScan Authentication Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro Apex One and OfficeScan server contain a vulnerable EXE file that could allow a remote attacker to write data to a path on affected installations and bypass root login.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36742',
      vendorProject: 'Trend Micro',
      product:
        'Apex One, Apex One as a Service, and Worry-Free Business Security',
      vulnerabilityName:
        'Trend Micro Multiple Products Improper Input Validation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro Apex One, Apex One as a Service, and Worry-Free Business Security contain an improper input validation vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://success.trendmicro.com/dcx/s/solution/000287819?language=en_US, https://success.trendmicro.com/dcx/s/solution/000287820?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36741',
      vendorProject: 'Trend Micro',
      product:
        'Apex One, Apex One as a Service, and Worry-Free Business Security',
      vulnerabilityName:
        'Trend Micro Multiple Products Improper Input Validation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Trend Micro Apex One, Apex One as a Service, and Worry-Free Business Security contain an improper input validation vulnerability that allows a remote attacker to upload files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://success.trendmicro.com/dcx/s/solution/000287819?language=en_US, https://success.trendmicro.com/dcx/s/solution/000287820?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-20085',
      vendorProject: 'TVT',
      product: 'NVMS-1000',
      vulnerabilityName: 'TVT NVMS-1000 Directory Traversal Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'TVT devices utilizing NVMS-1000 software contain a directory traversal vulnerability via GET /.. requests.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5849',
      vendorProject: 'Unraid',
      product: 'Unraid',
      vulnerabilityName: 'Unraid Authentication Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Unraid contains an authentication bypass vulnerability that allows attackers to gain access to the administrative interface. This CVE is chainable with CVE-2020-5847 for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5847',
      vendorProject: 'Unraid',
      product: 'Unraid',
      vulnerabilityName: 'Unraid Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Unraid contains a vulnerability due to the insecure use of the extract PHP function that can be abused to execute remote code as root. This CVE is chainable with CVE-2020-5849 for initial access.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-16759',
      vendorProject: 'vBulletin',
      product: 'vBulletin',
      vulnerabilityName:
        'vBulletin PHP Module Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'The PHP module within vBulletin contains an unspecified vulnerability that allows for remote code execution via the widgetConfig[code] parameter in an ajax/render/widget_php routestring request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-17496',
      vendorProject: 'vBulletin',
      product: 'vBulletin',
      vulnerabilityName:
        'vBulletin PHP Module Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'The PHP module within vBulletin contains an unspecified vulnerability that allows for remote code execution via crafted subWidgets data in an ajax/render/widget_tabbedcontainer_tab_panel request. This CVE ID resolves an incomplete patch for CVE-2019-16759.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-5544',
      vendorProject: 'VMware',
      product: 'VMware ESXi and Horizon DaaS',
      vulnerabilityName:
        'VMware ESXi and Horizon DaaS OpenSLP Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware ESXi and Horizon Desktop as a Service (DaaS) OpenSLP contains a heap-based buffer overflow vulnerability that allows an attacker with network access to port 427 to overwrite the heap of the OpenSLP service to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3992',
      vendorProject: 'VMware',
      product: 'ESXi',
      vulnerabilityName: 'VMware ESXi OpenSLP Use-After-Free Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware ESXi OpenSLP contains a use-after-free vulnerability that allows an attacker residing in the management network with access to port 427 to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3950',
      vendorProject: 'VMware',
      product: 'Multiple Products',
      vulnerabilityName:
        'VMware Multiple Products Privilege Escalation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware Fusion, Remote Console (VMRC) for Mac, and Horizon Client for Mac contain a privilege escalation vulnerability due to improper use of setuid binaries that allows attackers to escalate privileges to root.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22005',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName: 'VMware vCenter Server File Upload Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware vCenter Server contains a file upload vulnerability in the Analytics service that allows a user with network access to port 443 to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3952',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName:
        'VMware vCenter Server Information Disclosure Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware vCenter Server contains an information disclosure vulnerability in the VMware Directory Service (vmdir) when the Platform Services Controller (PSC) does not correctly implement access controls. Successful exploitation allows an attacker with network access to port 389 to extract sensitive information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21972',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName:
        'VMware vCenter Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware vCenter Server vSphere Client contains a remote code execution vulnerability in a vCenter Server plugin which allows an attacker with network access to port 443 to execute commands with unrestricted privileges on the underlying operating system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21985',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName:
        'VMware vCenter Server Improper Input Validation Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware vSphere Client contains an improper input validation vulnerability in the Virtual SAN Health Check plug-in, which is enabled by default in vCenter Server, which allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-4006',
      vendorProject: 'VMware',
      product: 'Multiple Products',
      vulnerabilityName:
        'Multiple VMware Products Command Injection Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'VMware Workspace One Access, Access Connector, Identity Manager, and Identity Manager Connector contain a command injection vulnerability. An attacker with network access to the administrative configurator on port 8443 and a valid password for the configurator administrator account can execute commands with unrestricted privileges on the underlying operating system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-25213',
      vendorProject: 'WordPress',
      product: 'File Manager Plugin',
      vulnerabilityName:
        'WordPress File Manager Plugin Remote Code Execution Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'WordPress File Manager plugin contains a remote code execution vulnerability that allows unauthenticated users to execute PHP code and upload malicious files on a target site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-11738',
      vendorProject: 'WordPress',
      product: 'Snap Creek Duplicator Plugin',
      vulnerabilityName:
        'WordPress Snap Creek Duplicator Plugin File Download Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'WordPress Snap Creek Duplicator plugin contains a file download vulnerability when an administrator creates a new copy of their site that allows an attacker to download the generated files from their Wordpress dashboard. This vulnerability affects Duplicator and Dulplicator Pro.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-9978',
      vendorProject: 'WordPress',
      product: 'Social Warfare Plugin',
      vulnerabilityName:
        'WordPress Social Warfare Plugin Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'WordPress Social Warfare plugin contains a cross-site scripting (XSS) vulnerability that allows for remote code execution. This vulnerability affects Social Warfare and Social Warfare Pro.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27561',
      vendorProject: 'Yealink',
      product: 'Device Management',
      vulnerabilityName:
        'Yealink Device Management Server-Side Request Forgery (SSRF) Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Yealink Device Management contains a server-side request forgery (SSRF) vulnerability that allows for unauthenticated remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40539',
      vendorProject: 'Zoho',
      product: 'ManageEngine',
      vulnerabilityName:
        'Zoho ManageEngine ADSelfService Plus Authentication Bypass Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Zoho ManageEngine ADSelfService Plus contains an authentication bypass vulnerability affecting the REST API URLs which allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-11-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-10189',
      vendorProject: 'Zoho',
      product: 'ManageEngine',
      vulnerabilityName:
        'Zoho ManageEngine Desktop Central File Upload Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Zoho ManageEngine Desktop Central contains a file upload vulnerability that allows for unauthenticated remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-8394',
      vendorProject: 'Zoho',
      product: 'ManageEngine',
      vulnerabilityName:
        'Zoho ManageEngine ServiceDesk Plus (SDP) File Upload Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Zoho ManageEngine ServiceDesk Plus (SDP) contains an unspecified vulnerability that allows remote users to upload files via login page customization.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-29583',
      vendorProject: 'Zyxel',
      product: 'Multiple Products',
      vulnerabilityName:
        'Zyxel Multiple Products Use of Hard-Coded Credentials Vulnerability',
      dateAdded: '2021-11-03',
      shortDescription:
        'Zyxel firewalls (ATP, USG, VM) and AP Controllers (NXC2500 and NXC5500) contain a use of hard-coded credentials vulnerability in an undocumented account ("zyfwp") with an unchangeable password.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22204',
      vendorProject: 'Perl',
      product: 'Exiftool',
      vulnerabilityName: 'ExifTool Remote Code Execution Vulnerability',
      dateAdded: '2021-11-17',
      shortDescription:
        'Improper neutralization of user data in the DjVu file format in Exiftool versions 7.44 and up allows arbitrary code execution when parsing the malicious image',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40449',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Win32k Privilege Escalation Vulnerability',
      dateAdded: '2021-11-17',
      shortDescription:
        'Unspecified vulnerability allows for an authenticated user to escalate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-01',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42321',
      vendorProject: 'Microsoft',
      product: 'Exchange',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2021-11-17',
      shortDescription:
        'An authenticated attacker could leverage improper validation in cmdlet arguments within Microsoft Exchange and perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-01',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42292',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Excel Security Feature Bypass',
      dateAdded: '2021-11-17',
      shortDescription:
        'A security feature bypass vulnerability in Microsoft Excel would allow a local user to perform arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-11261',
      vendorProject: 'Qualcomm',
      product:
        'Snapdragon Auto, Snapdragon Compute, Snapdragon Connectivity, Snapdragon Consumer IOT, Snapdragon Industrial IOT, Snapdragon Mobile, Snapdragon Voice & Music, Snapdragon Wearables',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Improper Input Validation Vulnerability',
      dateAdded: '2021-12-01',
      shortDescription:
        'Memory corruption due to improper check to return error when user application requests memory allocation of a huge size in Snapdragon Auto, Snapdragon Compute, Snapdragon Connectivity, Snapdragon Consumer IOT, Snapdragon Industrial IOT, Snapdragon Mobile, Snapdragon Voice & Music, Snapdragon Wearables',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-14847',
      vendorProject: 'MikroTik',
      product: 'RouterOS',
      vulnerabilityName: 'MikroTik Router OS Directory Traversal Vulnerability',
      dateAdded: '2021-12-01',
      shortDescription:
        'MikroTik RouterOS through 6.42 allows unauthenticated remote attackers to read arbitrary files and remote authenticated attackers to write arbitrary files due to a directory traversal vulnerability in the WinBox interface.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-37415',
      vendorProject: 'Zoho',
      product: 'ManageEngine ServiceDesk Plus (SDP)',
      vulnerabilityName:
        'Zoho ManageEngine ServiceDesk Authentication Bypass Vulnerability',
      dateAdded: '2021-12-01',
      shortDescription:
        'Zoho ManageEngine ServiceDesk Plus before 11302 is vulnerable to authentication bypass that allows a few REST-API URLs without authentication',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40438',
      vendorProject: 'Apache',
      product: 'Apache',
      vulnerabilityName: 'Apache HTTP Server-Side Request Forgery (SSRF)',
      dateAdded: '2021-12-01',
      shortDescription:
        'A crafted request uri-path can cause mod_proxy to forward the request to an origin server choosen by the remote user. This issue affects Apache HTTP Server 2.4.48 and earlier.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-44077',
      vendorProject: 'Zoho',
      product: 'ManageEngine ServiceDesk Plus (SDP) / SupportCenter Plus',
      vulnerabilityName:
        'Zoho ManageEngine ServiceDesk Plus Remote Code Execution Vulnerability',
      dateAdded: '2021-12-01',
      shortDescription:
        'Zoho ManageEngine ServiceDesk Plus before 11306, ServiceDesk Plus MSP before 10530, and SupportCenter Plus before 11014 are vulnerable to unauthenticated remote code execution',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-44515',
      vendorProject: 'Zoho',
      product: 'Desktop Central',
      vulnerabilityName:
        'Zoho Desktop Central Authentication Bypass Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'Zoho Desktop Central contains an authentication bypass vulnerability that could allow an attacker to execute arbitrary code in the Desktop Central MSP server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-13272',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName:
        'Linux Kernel Improper Privilege Management Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'Kernel/ptrace.c in Linux kernel mishandles contains an improper privilege management vulnerability that allows local users to obtain root access.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-35394',
      vendorProject: 'Realtek',
      product: 'Jungle Software Development Kit (SDK)',
      vulnerabilityName:
        'Realtek Jungle SDK Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'RealTek Jungle SDK contains multiple memory corruption vulnerabilities which can allow an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7238',
      vendorProject: 'Sonatype',
      product: 'Nexus Repository Manager',
      vulnerabilityName:
        'Sonatype Nexus Repository Manager Incorrect Access Control Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'Sonatype Nexus Repository Manager before 3.15.0 has an incorrect access control vulnerability. Exploitation allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0193',
      vendorProject: 'Apache',
      product: 'Solr',
      vulnerabilityName:
        'Apache Solr DataImportHandler Code Injection Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'The optional Apache Solr module DataImportHandler contains a code injection vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-44168',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName: 'Fortinet FortiOS Arbitrary File Download',
      dateAdded: '2021-12-10',
      shortDescription:
        'Fortinet FortiOS "execute restore src-vis" downloads code without integrity checking, allowing an attacker to arbitrarily download files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-17562',
      vendorProject: 'Embedthis',
      product: 'GoAhead',
      vulnerabilityName:
        'Embedthis GoAhead Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'Embedthis GoAhead before 3.6.5 allows remote code execution if CGI is enabled and a CGI program is dynamically linked.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12149',
      vendorProject: 'Red Hat',
      product: 'JBoss Application Server',
      vulnerabilityName:
        'Red Hat JBoss Application Server Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'The JBoss Application Server, shipped with Red Hat Enterprise Application Platform 5.2, allows an attacker to execute arbitrary code via crafted serialized data.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-1871',
      vendorProject: 'Red Hat',
      product: 'JBoss Seam 2',
      vulnerabilityName:
        'Red Hat Linux JBoss Seam 2 Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'JBoss Seam 2 (jboss-seam2), as used in JBoss Enterprise Application Platform 4.3.0 for Red Hat Linux, allows attackers to perform remote code execution. This vulnerability can only be exploited when the Java Security Manager is not properly configured.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-17463',
      vendorProject: 'Fuel CMS',
      product: 'Fuel CMS',
      vulnerabilityName: 'Fuel CMS SQL Injection Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'FUEL CMS 1.4.7 allows SQL Injection via the col parameter to /pages/items, /permissions/items, or /navigation/items.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8816',
      vendorProject: 'Pi-hole',
      product: 'AdminLTE',
      vulnerabilityName: 'Pi-Hole AdminLTE Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'Pi-hole Web v4.3.2 (aka AdminLTE) allows Remote Code Execution by privileged dashboard users via a crafted DHCP static lease.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-10758',
      vendorProject: 'MongoDB',
      product: 'mongo-express',
      vulnerabilityName:
        'MongoDB mongo-express Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'mongo-express before 0.54.0 is vulnerable to Remote Code Execution via endpoints that uses the `toBSON` method.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-44228',
      vendorProject: 'Apache',
      product: 'Log4j2',
      vulnerabilityName: 'Apache Log4j2 Remote Code Execution Vulnerability',
      dateAdded: '2021-12-10',
      shortDescription:
        'Apache Log4j2 contains a vulnerability where JNDI features do not protect against attacker-controlled JNDI-related endpoints, allowing for remote code execution.',
      requiredAction:
        'For all affected software assets for which updates exist, the only acceptable remediation actions are: 1) Apply updates; OR 2) remove affected assets from agency networks. Temporary mitigations using one of the measures provided at https://www.cisa.gov/uscert/ed-22-02-apache-log4j-recommended-mitigation-measures are only acceptable until updates are available.',
      dueDate: '2021-12-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-43890',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Installer Spoofing Vulnerability',
      dateAdded: '2021-12-15',
      shortDescription:
        'Microsoft Windows AppX Installer contains a spoofing vulnerability which has a high impacts to confidentiality, integrity, and availability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-4102',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Use-After-Free Vulnerability',
      dateAdded: '2021-12-15',
      shortDescription:
        'Google Chromium V8 Engine contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2021-12-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22017',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName: 'VMware vCenter Server Improper Access Control',
      dateAdded: '2022-01-10',
      shortDescription:
        'Rhttproxy as used in vCenter Server contains a vulnerability due to improper implementation of URI normalization.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-01-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36260',
      vendorProject: 'Hikvision',
      product: 'Security cameras web server',
      vulnerabilityName: 'Hikvision Improper Input Validation',
      dateAdded: '2022-01-10',
      shortDescription:
        'A command injection vulnerability in the web server of some Hikvision product. Due to the insufficient input validation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-01-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-6572',
      vendorProject: 'Google',
      product: 'Chrome Media',
      vulnerabilityName:
        'Google Chrome Media Prior to 81.0.4044.92 Use-After-Free Vulnerability',
      dateAdded: '2022-01-10',
      shortDescription:
        'Google Chrome Media contains a use-after-free vulnerability that allows a remote attacker to execute code via a crafted HTML page.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1458',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-01-10',
      shortDescription:
        "A privilege escalation vulnerability exists in Windows when the Win32k component fails to properly handle objects in memory, aka 'Win32k EoP.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3900',
      vendorProject: 'Microsoft',
      product: 'WinVerifyTrust function',
      vulnerabilityName:
        'Microsoft WinVerifyTrust function Remote Code Execution',
      dateAdded: '2022-01-10',
      shortDescription:
        'A remote code execution vulnerability exists in the way that the WinVerifyTrust function handles Windows Authenticode signature verification for PE files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-2725',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName: 'Oracle WebLogic Server, Injection',
      dateAdded: '2022-01-10',
      shortDescription:
        'Injection vulnerability in the Oracle WebLogic Server component of Oracle Fusion Middleware (subcomponent: Web Services).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-9670',
      vendorProject: 'Synacor',
      product: 'Zimbra Collaboration (ZCS)',
      vulnerabilityName:
        'Synacor Zimbra Collaboration (ZCS) Improper Restriction of XML External Entity Reference',
      dateAdded: '2022-01-10',
      shortDescription:
        'Improper Restriction of XML External Entity Reference vulnerability affecting Synacor Zimbra Collaboration (ZCS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-13382',
      vendorProject: 'Fortinet',
      product: 'FortiOS and FortiProxy',
      vulnerabilityName:
        'Fortinet FortiOS and FortiProxy Improper Authorization',
      dateAdded: '2022-01-10',
      shortDescription:
        'An Improper Authorization vulnerability in Fortinet FortiOS and FortiProxy under SSL VPN web portal allows an unauthenticated attacker to modify the password.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-13383',
      vendorProject: 'Fortinet',
      product: 'FortiOS and FortiProxy',
      vulnerabilityName: 'Fortinet FortiOS and FortiProxy Out-of-bounds Write',
      dateAdded: '2022-01-10',
      shortDescription:
        'A heap buffer overflow in Fortinet FortiOS and FortiProxy may cause the SSL VPN web service termination for logged in users.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1579',
      vendorProject: 'Palo Alto Networks',
      product: 'PAN-OS',
      vulnerabilityName:
        'Palo Alto Networks PAN-OS Remote Code Execution Vulnerability',
      dateAdded: '2022-01-10',
      shortDescription:
        'Remote Code Execution in PAN-OS with GlobalProtect Portal or GlobalProtect Gateway Interface enabled.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-10149',
      vendorProject: 'Exim',
      product: 'Mail Transfer Agent (MTA)',
      vulnerabilityName:
        'Exim Mail Transfer Agent (MTA) Improper Input Validation',
      dateAdded: '2022-01-10',
      shortDescription:
        'Improper validation of recipient address in deliver_message() function in /src/deliver.c may lead to remote command execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-7450',
      vendorProject: 'IBM',
      product: 'WebSphere Application Server and Server Hypervisor Edition',
      vulnerabilityName:
        'IBM WebSphere Application Server and Server Hypervisor Edition Code Injection.',
      dateAdded: '2022-01-10',
      shortDescription:
        'Serialized-object interfaces in certain IBM analytics, business solutions, cognitive, IT infrastructure, and mobile and social products allow remote attackers to execute arbitrary commands',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-1000486',
      vendorProject: 'Primetek',
      product: 'Primefaces Application',
      vulnerabilityName:
        'Primetek Primefaces Remote Code Execution Vulnerability',
      dateAdded: '2022-01-10',
      shortDescription:
        'Primetek Primefaces is vulnerable to a weak encryption flaw resulting in remote code execution',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7609',
      vendorProject: 'Elastic',
      product: 'Kibana',
      vulnerabilityName: 'Kibana Arbitrary Code Execution',
      dateAdded: '2022-01-10',
      shortDescription:
        'Kibana contain an arbitrary code execution flaw in the Timelion visualizer.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27860',
      vendorProject: 'FatPipe',
      product: 'WARP, IPVPN, and MPVPN software',
      vulnerabilityName:
        'FatPipe WARP, IPVPN, and MPVPN Configuration Upload exploit',
      dateAdded: '2022-01-10',
      shortDescription:
        'A vulnerability in the web management interface of FatPipe WARP, IPVPN, and MPVPN software allows a remote, unauthenticated attacker to upload a file to any location on the filesystem.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-01-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-32648',
      vendorProject: 'October CMS',
      product: 'October CMS',
      vulnerabilityName: 'October CMS Improper Authentication',
      dateAdded: '2022-01-18',
      shortDescription:
        'In affected versions of the october/system package an attacker can request an account password reset and then gain access to the account using a specially crafted request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25296',
      vendorProject: 'Nagios',
      product: 'Nagios XI',
      vulnerabilityName: 'Nagios XI OS Command Injection',
      dateAdded: '2022-01-18',
      shortDescription:
        'Nagios XI contains a vulnerability which can lead to OS command injection on the Nagios XI server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25297',
      vendorProject: 'Nagios',
      product: 'Nagios XI',
      vulnerabilityName: 'Nagios XI OS Command Injection',
      dateAdded: '2022-01-18',
      shortDescription:
        'Nagios XI contains a vulnerability which can lead to OS command injection on the Nagios XI server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25298',
      vendorProject: 'Nagios',
      product: 'Nagios XI',
      vulnerabilityName: 'Nagios XI OS Command Injection',
      dateAdded: '2022-01-18',
      shortDescription:
        'Nagios XI contains a vulnerability which can lead to OS command injection on the Nagios XI server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40870',
      vendorProject: 'Aviatrix',
      product: 'Aviatrix Controller',
      vulnerabilityName: 'Aviatrix Controller Unrestricted Upload of File',
      dateAdded: '2022-01-18',
      shortDescription:
        'Unrestricted upload of a file with a dangerous type is possible, which allows an unauthenticated user to execute arbitrary code via directory traversal.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-33766',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName: 'Microsoft Exchange Server Information Disclosure',
      dateAdded: '2022-01-18',
      shortDescription:
        'Microsoft Exchange Server contains an information disclosure vulnerability which can allow an unauthenticated attacker to steal email traffic from target.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21975',
      vendorProject: 'VMware',
      product: 'vRealize Operations Manager API',
      vulnerabilityName:
        'VMware Server Side Request Forgery in vRealize Operations Manager API',
      dateAdded: '2022-01-18',
      shortDescription:
        'Server Side Request Forgery (SSRF) in vRealize Operations Manager API prior to 8.4 may allow a malicious actor with network access to the vRealize Operations Manager API to perform a SSRF attack to steal administrative credentials.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21315',
      vendorProject: 'Npm package',
      product: 'System Information Library for Node.JS',
      vulnerabilityName:
        'System Information Library for Node.JS Command Injection',
      dateAdded: '2022-01-18',
      shortDescription:
        'In this vulnerability, an attacker can send a malicious payload that will exploit the name parameter. After successful exploitation, attackers can execute remote.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22991',
      vendorProject: 'F5',
      product: 'BIG-IP Traffic Management Microkernel',
      vulnerabilityName:
        'F5 BIG-IP Traffic Management Microkernel Buffer Overflow',
      dateAdded: '2022-01-18',
      shortDescription:
        'The Traffic Management Microkernel of BIG-IP ASM Risk Engine has a buffer overflow vulnerability, leading to a bypassing of URL-based access controls.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-14864',
      vendorProject: 'Oracle',
      product: 'Intelligence Enterprise Edition',
      vulnerabilityName:
        'Oracle Business Intelligence Enterprise Edition Path Transversal',
      dateAdded: '2022-01-18',
      shortDescription:
        'Path traversal vulnerability, where an attacker can target the preview FilePath parameter of the getPreviewImage function to get access to arbitrary system file.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-13671',
      vendorProject: 'Drupal',
      product: 'Drupal core',
      vulnerabilityName: 'Drupal core Un-restricted Upload of File',
      dateAdded: '2022-01-18',
      shortDescription:
        'Improper sanitization in the extension file names is present in Drupal core.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-11978',
      vendorProject: 'Apache',
      product: 'Airflow',
      vulnerabilityName: 'Apache Airflow Command Injection',
      dateAdded: '2022-01-18',
      shortDescription:
        'A remote code/command injection vulnerability was discovered in one of the example DAGs shipped with Airflow.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-13927',
      vendorProject: 'Apache',
      product: "Airflow's Experimental API",
      vulnerabilityName:
        "Apache Airflow's Experimental API Authentication Bypass",
      dateAdded: '2022-01-18',
      shortDescription:
        "The previous default setting for Airflow's Experimental API was to allow all API requests without authentication.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2006-1547',
      vendorProject: 'Apache',
      product: 'Struts 1',
      vulnerabilityName:
        'Apache Struts 1 ActionForm Denial-of-Service Vulnerability',
      dateAdded: '2022-01-21',
      shortDescription:
        'ActionForm in Apache Struts versions before 1.2.9 with BeanUtils 1.7 contains a vulnerability that allows for denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0391',
      vendorProject: 'Apache',
      product: 'Struts 2',
      vulnerabilityName:
        'Apache Struts 2 Improper Input Validation Vulnerability',
      dateAdded: '2022-01-21',
      shortDescription:
        'The ExceptionDelegator component in Apache Struts 2 before 2.2.3.1 contains an improper input validation vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8453',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-01-21',
      shortDescription:
        'Microsoft Windows Win32k contains a vulnerability that allows an attacker to escalate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-21',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-35247',
      vendorProject: 'SolarWinds',
      product: 'Serv-U',
      vulnerabilityName:
        'SolarWinds Serv-U Improper Input Validation Vulnerability',
      dateAdded: '2022-01-21',
      shortDescription:
        'SolarWinds Serv-U versions 15.2.5 and earlier contain an improper input validation vulnerability that allows attackers to build and send queries without sanitization.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22587',
      vendorProject: 'Apple',
      product: 'iOS and macOS',
      vulnerabilityName: 'Apple Memory Corruption Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'Apple IOMobileFrameBuffer contains a memory corruption vulnerability which can allow a malicious application to execute arbitrary code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-11',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20038',
      vendorProject: 'SonicWall',
      product: 'SMA 100 Appliances',
      vulnerabilityName:
        'SonicWall SMA 100 Appliances Stack-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'SonicWall SMA 100 devies are vulnerable to an unauthenticated stack-based buffer overflow vulnerability where exploitation can result in code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-11',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5722',
      vendorProject: 'Grandstream',
      product: 'UCM6200',
      vulnerabilityName:
        'Grandstream Networks UCM6200 Series SQL Injection Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'Grandstream UCM6200 series is vulnerable to an unauthenticated remote SQL injection via crafted HTTP request. Exploitation can allow for code execution as root.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0787',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Background Intelligent Transfer Service (BITS) Improper Privilege Management Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'Microsoft Windows BITS is vulnerable to to a privilege elevation vulnerability if it improperly handles symbolic links. An actor can exploit this vulnerability to execute arbitrary code with system-level privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-28',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-5689',
      vendorProject: 'Intel',
      product:
        'Active Management Technology (AMT), Small Business Technology (SBT), and Standard Manageability',
      vulnerabilityName:
        'Intel Active Management Technology (AMT), Small Business Technology (SBT), and Standard Manageability Privilege Escalation Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'Intel products contain a vulnerability which can allow attackers to perform privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-1776',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability that allows remote attackers to execute code in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://learn.microsoft.com/en-us/security-updates/SecurityBulletins/2014/ms14-021?redirectedfrom=MSDN',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-6271',
      vendorProject: 'GNU',
      product: 'Bourne-Again Shell (Bash)',
      vulnerabilityName:
        'GNU Bourne-Again Shell (Bash) Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'GNU Bash through 4.3 processes trailing strings after function definitions in the values of environment variables, which allows remote attackers to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-7169',
      vendorProject: 'GNU',
      product: 'Bourne-Again Shell (Bash)',
      vulnerabilityName:
        'GNU Bourne-Again Shell (Bash) Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-01-28',
      shortDescription:
        'GNU Bash through 4.3 processes trailing strings after function definitions in the values of environment variables, which allows remote attackers to execute code. This CVE correctly remediates the vulnerability in CVE-2014-6271.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-21882',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-02-04',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36934',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows SAM Local Privilege Escalation Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'If a Volume Shadow Copy (VSS) shadow copy of the system drive is available, users can read the SAM file which would allow any user to escalate privileges to SYSTEM level.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0796',
      vendorProject: 'Microsoft',
      product: 'SMBv3',
      vulnerabilityName: 'Microsoft SMBv3 Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'A remote code execution vulnerability exists in the way that the Microsoft Server Message Block 3.1.1 (SMBv3) protocol handles certain requests. An attacker who successfully exploited the vulnerability could gain the ability to execute code on the target server or client.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-1000861',
      vendorProject: 'Jenkins',
      product: 'Jenkins Stapler Web Framework',
      vulnerabilityName:
        'Jenkins Stapler Web Framework Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'A code execution vulnerability exists in the Stapler web framework used by Jenkins',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-9791',
      vendorProject: 'Apache',
      product: 'Struts 1',
      vulnerabilityName:
        'Apache Struts 1 Improper Input Validation Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'The Struts 1 plugin in Apache Struts might allow remote code execution via a malicious field value passed in a raw message to the ActionMessage.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-8464',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Shell (.lnk) Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'Windows Shell in multiple versions of Microsoft Windows allows local users or remote attackers to execute arbitrary code via a crafted .LNK file',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-10271',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName:
        'Oracle Corporation WebLogic Server Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'Oracle Corporation WebLogic Server contains a vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0263',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'Microsoft Win32k contains a privilege escalation vulnerability due to the Windows kernel-mode driver failing to properly handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0262',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'A remote code execution vulnerability exists in Microsoft Office.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0145',
      vendorProject: 'Microsoft',
      product: 'SMBv1',
      vulnerabilityName: 'Microsoft SMBv1 Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'The SMBv1 server in multiple Microsoft Windows versions allows remote attackers to execute arbitrary code via crafted packets.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0144',
      vendorProject: 'Microsoft',
      product: 'SMBv1',
      vulnerabilityName: 'Microsoft SMBv1 Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'The SMBv1 server in multiple Microsoft Windows versions allows remote attackers to execute arbitrary code via crafted packets.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3088',
      vendorProject: 'Apache',
      product: 'ActiveMQ',
      vulnerabilityName:
        'Apache ActiveMQ Improper Input Validation Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'The Fileserver web application in Apache ActiveMQ allows remote attackers to upload and execute arbitrary files via an HTTP PUT followed by an HTTP MOVE request',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2051',
      vendorProject: 'D-Link',
      product: 'DIR-645 Router',
      vulnerabilityName:
        'D-Link DIR-645 Router Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'D-Link DIR-645 Wired/Wireless Router allows remote attackers to execute arbitrary commands via a GetDeviceSettings action to the HNAP interface.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1635',
      vendorProject: 'Microsoft',
      product: 'HTTP.sys',
      vulnerabilityName:
        'Microsoft HTTP.sys Remote Code Execution Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'Microsoft HTTP protocol stack (HTTP.sys) contains a vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1130',
      vendorProject: 'Apple',
      product: 'OS X',
      vulnerabilityName: 'Apple OS X Authentication Bypass Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'The XPC implementation in Admin Framework in Apple OS X before 10.10.3 allows local users to bypass authentication and obtain admin privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-4404',
      vendorProject: 'Apple',
      product: 'OS X',
      vulnerabilityName: 'Apple OS X Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-02-10',
      shortDescription:
        'Heap-based buffer overflow in IOHIDFamily in Apple OS X, which affects, iOS before 8 and Apple TV before 7, allows attackers to execute arbitrary code in a privileged context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22620',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS Webkit Use-After-Free Vulnerability',
      dateAdded: '2022-02-11',
      shortDescription:
        'Apple iOS, iPadOS, and macOS WebKit contain a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-02-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24086',
      vendorProject: 'Adobe',
      product: 'Commerce and Magento Open Source',
      vulnerabilityName:
        'Adobe Commerce and Magento Open Source Improper Input Validation Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'Adobe Commerce and Magento Open Source contain an improper input validation vulnerability which can allow for arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-0609',
      vendorProject: 'Google',
      product: 'Chromium Animation',
      vulnerabilityName:
        'Google Chromium Animation Use-After-Free Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'Google Chromium Animation contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0752',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Type Confusion Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'A remote code execution vulnerability exists in the way that the scripting engine handles objects in memory in Internet Explorer',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8174',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows VBScript Engine Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'A remote code execution vulnerability exists in the way that the VBScript engine handles objects in memory, aka "Windows VBScript Engine Remote Code Execution"',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-20250',
      vendorProject: 'RARLAB',
      product: 'WinRAR',
      vulnerabilityName: 'WinRAR Absolute Path Traversal Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'WinRAR Absolute Path Traversal vulnerability leads to Remote Code Execution',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-15982',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'Adobe Flash Player com.adobe.tvsdk.mediacore.metadata Use After Free Vulnerability',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-9841',
      vendorProject: 'PHPUnit',
      product: 'PHPUnit',
      vulnerabilityName: 'PHPUnit Command Injection Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'PHPUnit allows remote attackers to execute arbitrary PHP code via HTTP POST data beginning with a "<?php " substring, as demonstrated by an attack on a site with an exposed /vendor folder, i.e., external access to the /vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php URI.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-1761',
      vendorProject: 'Microsoft',
      product: 'Word',
      vulnerabilityName: 'Microsoft Word Memory Corruption Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'Microsoft Word contains a memory corruption vulnerability which when exploited could allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3906',
      vendorProject: 'Microsoft',
      product: 'Graphics Component',
      vulnerabilityName:
        'Microsoft Graphics Component Memory Corruption Vulnerability',
      dateAdded: '2022-02-15',
      shortDescription:
        'Microsoft Graphics Component contains a memory corruption vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-23131',
      vendorProject: 'Zabbix',
      product: 'Frontend',
      vulnerabilityName: 'Zabbix Frontend Authentication Bypass Vulnerability',
      dateAdded: '2022-02-22',
      shortDescription:
        'Unsafe client-side session storage leading to authentication bypass/instance takeover via Zabbix Frontend with configured SAML.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-23134',
      vendorProject: 'Zabbix',
      product: 'Frontend',
      vulnerabilityName:
        'Zabbix Frontend Improper Access Control Vulnerability',
      dateAdded: '2022-02-22',
      shortDescription:
        'Malicious actors can pass step checks and potentially change the configuration of Zabbix Frontend.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24682',
      vendorProject: 'Zimbra',
      product: 'Webmail',
      vulnerabilityName: 'Zimbra Webmail Cross-Site Scripting Vulnerability',
      dateAdded: '2022-02-25',
      shortDescription:
        'Zimbra webmail clients running versions 8.8.15 P29 & P30 contain a XSS vulnerability that would allow attackers to steal session cookie files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-11',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-8570',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Remote Code Execution Vulnerability',
      dateAdded: '2022-02-25',
      shortDescription:
        'A remote code execution vulnerability exists in Microsoft Office software when it fails to properly handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0222',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Remote Code Execution Vulnerability',
      dateAdded: '2022-02-25',
      shortDescription:
        'A remote code execution vulnerability exists when Internet Explorer improperly accesses objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-6352',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Code Injection Vulnerability',
      dateAdded: '2022-02-25',
      shortDescription:
        'Microsoft Windows allow remote attackers to execute arbitrary code via a crafted OLE object.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-20708',
      vendorProject: 'Cisco',
      product: 'Small Business RV160, RV260, RV340, and RV345 Series Routers',
      vulnerabilityName:
        'Cisco Small Business RV Series Routers Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in Cisco Small Business RV160, RV260, RV340, and RV345 Series Routers could allow an attacker to do any of the following: Execute arbitrary code elevate privileges, execute arbitrary commands, bypass authentication and authorization protections, fetch and run unsigned software, or cause a denial of service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-20703',
      vendorProject: 'Cisco',
      product: 'Small Business RV160, RV260, RV340, and RV345 Series Routers',
      vulnerabilityName:
        'Cisco Small Business RV Series Routers Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in Cisco Small Business RV160, RV260, RV340, and RV345 Series Routers could allow an attacker to do any of the following: Execute arbitrary code elevate privileges, execute arbitrary commands, bypass authentication and authorization protections, fetch and run unsigned software, or cause a denial of service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-20701',
      vendorProject: 'Cisco',
      product: 'Small Business RV160, RV260, RV340, and RV345 Series Routers',
      vulnerabilityName:
        'Cisco Small Business RV Series Routers Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in Cisco Small Business RV160, RV260, RV340, and RV345 Series Routers could allow an attacker to do any of the following: Execute arbitrary code elevate privileges, execute arbitrary commands, bypass authentication and authorization protections, fetch and run unsigned software, or cause a denial of service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-20700',
      vendorProject: 'Cisco',
      product: 'Small Business RV160, RV260, RV340, and RV345 Series Routers',
      vulnerabilityName:
        'Cisco Small Business RV Series Routers Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in Cisco Small Business RV160, RV260, RV340, and RV345 Series Routers could allow an attacker to do any of the following: Execute arbitrary code elevate privileges, execute arbitrary commands, bypass authentication and authorization protections, fetch and run unsigned software, or cause a denial of service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-20699',
      vendorProject: 'Cisco',
      product: 'Small Business RV160, RV260, RV340, and RV345 Series Routers',
      vulnerabilityName:
        'Cisco Small Business RV Series Routers Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in Cisco Small Business RV160, RV260, RV340, and RV345 Series Routers could allow an attacker to do any of the following: Execute arbitrary code elevate privileges, execute arbitrary commands, bypass authentication and authorization protections, fetch and run unsigned software, or cause a denial of service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-41379',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Installer Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Windows Installer contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1938',
      vendorProject: 'Apache',
      product: 'Tomcat',
      vulnerabilityName:
        'Apache Tomcat Improper Privilege Management Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Apache Tomcat treats Apache JServ Protocol (AJP) connections as having higher trust than, for example, a similar HTTP connection. If such connections are available to an attacker, they can be exploited.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-11899',
      vendorProject: 'Treck TCP/IP stack',
      product: 'IPv6',
      vulnerabilityName: 'Treck TCP/IP stack Out-of-Bounds Read Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Treck TCP/IP stack contains an IPv6 out-of-bounds read vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-16928',
      vendorProject: 'Exim',
      product: 'Exim Internet Mailer',
      vulnerabilityName: 'Exim Out-of-bounds Write Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Exim contains an out-of-bounds write vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1652',
      vendorProject: 'Cisco',
      product: 'Small Business RV320 and RV325 Dual Gigabit WAN VPN Routers',
      vulnerabilityName:
        'Cisco Small Business Routers Improper Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the web-based management interface of Cisco Small Business RV320 and RV325 Dual Gigabit WAN VPN Routers could allow an authenticated, remote attacker with administrative privileges on an affected device to execute arbitrary commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1297',
      vendorProject: 'Microsoft',
      product: 'Excel',
      vulnerabilityName: 'Microsoft Excel Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A remote code execution vulnerability exists in Microsoft Excel when the software fails to properly handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8581',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A privilege escalation vulnerability exists in Microsoft Exchange Server. An attacker who successfully exploited this vulnerability could attempt to impersonate any other user of the Exchange server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8298',
      vendorProject: 'ChakraCore',
      product: 'ChakraCore scripting engine',
      vulnerabilityName:
        'ChakraCore Scripting Engine Type Confusion Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The ChakraCore scripting engine contains a type confusion vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0180',
      vendorProject: 'Cisco',
      product: 'IOS Software',
      vulnerabilityName: 'Cisco IOS Software Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Login Enhancements (Login Block) feature of Cisco IOS Software could allow an unauthenticated, remote attacker to trigger a reload of an affected system, resulting in a denial of service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0179',
      vendorProject: 'Cisco',
      product: 'IOS Software',
      vulnerabilityName: 'Cisco IOS Software Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Login Enhancements (Login Block) feature of Cisco IOS Software could allow an unauthenticated, remote attacker to trigger a reload of an affected system, resulting in a denial of service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0175',
      vendorProject: 'Cisco',
      product: 'IOS, XR, and XE Software',
      vulnerabilityName:
        'Cisco IOS, XR, and XE Software Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Format string vulnerability in the Link Layer Discovery Protocol (LLDP) subsystem of Cisco IOS Software, Cisco IOS XE Software, and Cisco IOS XR Software could allow an unauthenticated, adjacent attacker to cause a denial of service (DoS) condition or execute arbitrary code with elevated privileges on an affected device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0174',
      vendorProject: 'Cisco',
      product: 'IOS XE Software',
      vulnerabilityName:
        'Cisco IOS Software and Cisco IOS XE Software Improper Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the DHCP option 82 encapsulation functionality of Cisco IOS Software and Cisco IOS XE Software could allow for denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0173',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software Improper Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Cisco IOS Software and Cisco IOS XE Software function that restores encapsulated option 82 information in DHCP Version 4 (DHCPv4) packets can allow for denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0172',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software Improper Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the DHCP option 82 encapsulation functionality of Cisco IOS Software and Cisco IOS XE Software could allow for denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0167',
      vendorProject: 'Cisco',
      product: 'IOS, XR, and XE Software',
      vulnerabilityName:
        'Cisco IOS, XR, and XE Software Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'There is a buffer overflow vulnerability in the Link Layer Discovery Protocol (LLDP) subsystem of Cisco IOS Software, Cisco IOS XE Software, and Cisco IOS XR Software which could allow an unauthenticated, adjacent attacker to cause a denial of service (DoS) condition or execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0161',
      vendorProject: 'Cisco',
      product: 'IOS Software',
      vulnerabilityName:
        'Cisco IOS Software Resource Management Errors Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Simple Network Management Protocol (SNMP) subsystem of Cisco IOS Software running on certain models of Cisco Catalyst Switches could allow an authenticated, remote attacker to cause a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0159',
      vendorProject: 'Cisco',
      product: 'IOS Software and Cisco IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and XE Software Internet Key Exchange Version 1 Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the implementation of Internet Key Exchange Version 1 (IKEv1) functionality in Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, remote attacker to cause an affected device to reload, resulting in a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0158',
      vendorProject: 'Cisco',
      product: 'IOS Software and Cisco IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and XE Software Internet Key Exchange Memory Leak Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the implementation of Internet Key Exchange Version 1 (IKEv1) functionality in Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, remote attacker to cause an affected device to reload, resulting in a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0156',
      vendorProject: 'Cisco',
      product: 'IOS Software and Cisco IOS XE Software',
      vulnerabilityName:
        'Cisco IOS Software and Cisco IOS XE Software Smart Install Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Smart Install feature of Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, remote attacker to trigger a reload of an affected device, resulting in a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0155',
      vendorProject: 'Cisco',
      product:
        'Catalyst 4500 Series Switches and Cisco Catalyst 4500-X Series Switches',
      vulnerabilityName:
        'Cisco Catalyst Bidirectional Forwarding Detection Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Bidirectional Forwarding Detection (BFD) offload implementation of Cisco Catalyst 4500 Series Switches and Cisco Catalyst 4500-X Series Switches could allow an unauthenticated, remote attacker to cause a crash of the iosd process, causing a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0154',
      vendorProject: 'Cisco',
      product: 'IOS Software',
      vulnerabilityName:
        'Cisco IOS Software Integrated Services Module for VPN Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the crypto engine of the Cisco Integrated Services Module for VPN (ISM-VPN) running Cisco IOS Software could allow an unauthenticated, remote attacker to cause a denial-of-service (DoS) condition.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0151',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS Software and Cisco IOS XE Software Quality of Service Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the quality of service (QoS) subsystem of Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, remote attacker to cause a denial of service (DoS) condition or execute arbitrary code with elevated privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-8540',
      vendorProject: 'Microsoft',
      product: 'Malware Protection Engine',
      vulnerabilityName:
        'Microsoft Malware Protection Engine Improper Restriction of Operations Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Microsoft Malware Protection Engine running on Microsoft Forefront and Microsoft Defender on Microsoft Windows Server 2008 SP2 and R2 SP1, Windows 7 SP1, Windows 8.1, Windows Server 2012 Gold and R2, Windows RT 8.1, Windows 10 Gold, 1511, 1607, and 1703, and Windows Server 2016, Microsoft Exchange Server 2013 and 2016, does not properly scan a specially crafted file leading to memory corruption. aka "Microsoft Malware Protection Engine Remote Code Execution Vulnerability".',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6744',
      vendorProject: 'Cisco',
      product: 'IOS software',
      vulnerabilityName:
        'Cisco IOS Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS 1 contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code on an affected system or cause an affected system to reload. An attacker could exploit these vulnerabilities by sending a crafted SNMP packet to an affected system via IPv4 or IPv6.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6743',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6740',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code on an affected system or cause an affected system to reload.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6739',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code on an affected system or cause an affected system to reload.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6738',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6737',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6736',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6663',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS Software and Cisco IOS XE Software Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Autonomic Networking feature of Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, adjacent attacker to cause autonomic nodes of an affected system to reload, resulting in denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6627',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS Software and Cisco IOS XE Software UDP Packet Processing Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the UDP processing code of Cisco IOS and IOS XE could allow an unauthenticated, remote attacker to cause the input queue of an affected system to hold UDP packets, causing an interface queue wedge and denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12319',
      vendorProject: 'Cisco',
      product: 'IOS XE Software',
      vulnerabilityName:
        'Cisco IOS XE Software Ethernet Virtual Private Network Border Gateway Protocol Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Border Gateway Protocol (BGP) over an Ethernet Virtual Private Network (EVPN) for Cisco IOS XE Software could allow an unauthenticated, remote attacker to cause the device to reload, resulting in a denial of service (DoS) condition, or potentially corrupt the BGP routing table, which could result in network instability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12240',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software DHCP Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Dynamic Host Configuration Protocol (DHCP) relay subsystem of Cisco IOS and Cisco IOS XE Software contains a vulnerability that could allow an unauthenticated, remote attacker to execute arbitrary code and gain full control of an affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12238',
      vendorProject: 'Cisco',
      product: 'Catalyst 6800 Series Switches',
      vulnerabilityName:
        'Cisco Catalyst 6800 Series Switches VPLS Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Virtual Private LAN Service (VPLS) code of Cisco IOS for Cisco Catalyst 6800 Series Switches could allow an unauthenticated, adjacent attacker to cause a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12237',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software Internet Key Exchange Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the Internet Key Exchange Version 2 (IKEv2) module of Cisco IOS and Cisco IOS XE could allow an unauthenticated, remote attacker to cause high CPU utilization, traceback messages, or a reload of an affected device that leads to a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12235',
      vendorProject: 'Cisco',
      product: 'IOS software',
      vulnerabilityName:
        'Cisco IOS Software for Cisco Industrial Ethernet Switches PROFINET Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the implementation of the PROFINET Discovery and Configuration Protocol (PN-DCP) for Cisco IOS could allow an unauthenticated, remote attacker to cause an affected device to reload, resulting in a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12234',
      vendorProject: 'Cisco',
      product: 'IOS software',
      vulnerabilityName:
        'Cisco IOS Software Common Industrial Protocol Request Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'There is a vulnerability in the implementation of the Common Industrial Protocol (CIP) feature in Cisco IOS could allow an unauthenticated, remote attacker to cause an affected device to reload, resulting in a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12233',
      vendorProject: 'Cisco',
      product: 'IOS software',
      vulnerabilityName:
        'Cisco IOS Software Common Industrial Protocol Request Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'There is a vulnerability in the implementation of the Common Industrial Protocol (CIP) feature in Cisco IOS could allow an unauthenticated, remote attacker to cause an affected device to reload, resulting in a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12232',
      vendorProject: 'Cisco',
      product: 'IOS software',
      vulnerabilityName:
        'Cisco IOS Software for Cisco Integrated Services Routers Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the implementation of a protocol in Cisco Integrated Services Routers Generation 2 (ISR G2) Routers running Cisco IOS could allow an unauthenticated, adjacent attacker to cause an affected device to reload, resulting in a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12231',
      vendorProject: 'Cisco',
      product: 'IOS software',
      vulnerabilityName:
        'Cisco IOS Software Network Address Translation Denial-of-Service Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability in the implementation of Network Address Translation (NAT) functionality in Cisco IOS could allow an unauthenticated, remote attacker to cause a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-11826',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A remote code execution vulnerability exists in Microsoft Office software when the software fails to properly handle objects in memory. An attacker who successfully exploited the vulnerability could run arbitrary code in the context of the current user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-11292',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Type Confusion Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Flash Player contains a type confusion vulnerability which can allow for remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0261',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Use-After-Free Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Office contains a use-after-free vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0001',
      vendorProject: 'Microsoft',
      product: 'Graphics Device Interface (GDI)',
      vulnerabilityName:
        'Microsoft Graphics Device Interface (GDI) Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Graphics Device Interface (GDI) in Microsoft Windows Vista SP2; Windows Server 2008 SP2 and R2 SP1; Windows 7 SP1; Windows 8.1; Windows Server 2012 Gold and R2; Windows RT 8.1; and Windows 10 Gold, 1511, and 1607 allows local users to gain privileges',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-8562',
      vendorProject: 'Siemens',
      product: 'SIMATIC CP',
      vulnerabilityName:
        'Siemens SIMATIC CP 1543-1 Improper Privilege Management Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An improper privilege management vulnerability exists within the Siemens SIMATIC Communication Processor (CP) that allows a privileged attacker to remotely cause a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7855',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Use-after-free vulnerability in Adobe Flash Player Windows and OS and Linux allows remote attackers to execute arbitrary code.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7262',
      vendorProject: 'Microsoft',
      product: 'Excel',
      vulnerabilityName:
        'Microsoft Office Security Feature Bypass Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A security feature bypass vulnerability exists when Microsoft Office improperly handles input. An attacker who successfully exploited the vulnerability could execute arbitrary commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7193',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Office contains a memory corruption vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-5195',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Race Condition Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Race condition in mm/gup.c in the Linux kernel allows local users to escalate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4117',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An access of resource using incompatible type vulnerability exists within Adobe Flash Player that allows an attacker to perform remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-1019',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Flash Player allows remote attackers to cause a denial of service or possibly execute arbitrary code.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0099',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Secondary Logon Service Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A privilege escalation vulnerability exists in Microsoft Windows if the Windows Secondary Logon Service fails to properly manage request handles in memory. An attacker who successfully exploited this vulnerability could run arbitrary code as an administrator.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-7645',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Flash Player allows remote attackers to execute arbitrary code via a crafted SWF file.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-5119',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A use-after-free vulnerability exists within the ActionScript 3 ByteArray class in Adobe Flash Player that allows an attacker to perform remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-4902',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName: 'Oracle Java SE Integrity Check Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Unspecified vulnerability in Oracle Java SE allows remote attackers to affect integrity via Unknown vectors related to deployment.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-3043',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A memory corruption vulnerability exists in Adobe Flash Player that allows an attacker to perform remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2590',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName:
        'Oracle Java SE and Java SE Embedded Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An unspecified vulnerability exists within Oracle Java Runtime Environment that allows an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2545',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Malformed EPS File Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Office allows remote attackers to execute arbitrary code via a crafted EPS image.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2424',
      vendorProject: 'Microsoft',
      product: 'PowerPoint',
      vulnerabilityName: 'Microsoft PowerPoint Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft PowerPoint allows remote attackers to execute arbitrary code or cause a denial of service (memory corruption) via a crafted Office document.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2387',
      vendorProject: 'Microsoft',
      product: 'ATM Font Driver',
      vulnerabilityName:
        'Microsoft ATM Font Driver Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'ATMFD.DLL in the Adobe Type Manager Font Driver in Microsoft Windows Server allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1701',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An unspecified vulnerability exists in the Win32k.sys kernel-mode driver in Microsoft Windows Server that allows a local attacker to execute arbitrary code with elevated privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1642',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Office contains a memory corruption vulnerability that allows remote attackers to execute arbitrary code via a crafted document.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-4114',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Object Linking & Embedding (OLE) Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A vulnerability exists in Windows Object Linking & Embedding (OLE) that could allow remote code execution if a user opens a file that contains a specially crafted OLE object.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0496',
      vendorProject: 'Adobe',
      product: 'Reader and Acrobat',
      vulnerabilityName:
        'Adobe Reader and Acrobat Use-After-Free Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Reader and Acrobat contain a use-after-free vulnerability which can allow for code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-5065',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Windows NDProxy.sys in the kernel contains an improper input validation vulnerability which can allow a local attacker to escalate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3897',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Use-After-Free Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A use-after-free vulnerability exists within CDisplayPointer in Microsoft Internet Explorer that allows an attacker to remotely execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3346',
      vendorProject: 'Adobe',
      product: 'Reader and Acrobat',
      vulnerabilityName:
        'Adobe Reader and Acrobat Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Reader and Acrobat contain a memory corruption vulnerability which can allow attackers to execute arbitrary code or cause a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-1675',
      vendorProject: 'Mozilla',
      product: 'Firefox',
      vulnerabilityName: 'Mozilla Firefox Information Disclosure Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Mozilla Firefox does not properly initialize data structures for the nsDOMSVGZoomEvent::mPreviousScale and nsDOMSVGZoomEvent::mNewScale functions, which allows remote attackers to obtain sensitive information from process memory via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-1347',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'This vulnerability may corrupt memory in a way that could allow an attacker to execute arbitrary code in the context of the current user within Internet Explorer.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0641',
      vendorProject: 'Adobe',
      product: 'Reader',
      vulnerabilityName: 'Adobe Reader Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A buffer overflow vulnerability exists in Adobe Reader which allows an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0640',
      vendorProject: 'Adobe',
      product: 'Reader and Acrobat',
      vulnerabilityName:
        'Adobe Reader and Acrobat Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An memory corruption vulnerability exists in the acroform.dll in Adobe Reader that allows an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0632',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName: 'Adobe ColdFusion Authentication Bypass Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An authentication bypass vulnerability exists in Adobe ColdFusion which could result in an unauthorized user gaining administrative access.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-4681',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName:
        'Oracle Java SE Runtime Environment (JRE) Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The Java Runtime Environment (JRE) component in Oracle Java SE allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-1856',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office MSCOMCTL.OCX Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The TabStrip ActiveX control in the Common Controls in MSCOMCTL.OCX in Microsoft Office allows remote attackers to execute arbitrary code via a crafted (1) document or (2) web page that triggers system-state corruption.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-1723',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName:
        'Oracle Java SE Runtime Environment (JRE) Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Unspecified vulnerability in the Java Runtime Environment (JRE) component in Oracle Java SE allows remote attackers to affect confidentiality, integrity, and availability via Unknown vectors related to Hotspot.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-1535',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Unspecified vulnerability in Adobe Flash Player allows remote attackers to execute arbitrary code or cause a denial of service via crafted SWF content.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0507',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName:
        'Oracle Java SE Runtime Environment (JRE) Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        "An incorrect type vulnerability exists in the Concurrency component of Oracle's Java Runtime Environment allows an attacker to remotely execute arbitrary code.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-3544',
      vendorProject: 'Oracle',
      product: 'Java SE JDK and JRE',
      vulnerabilityName:
        'Oracle Java SE Runtime Environment (JRE) Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        "An access control vulnerability exists in the Applet Rhino Script Engine component of Oracle's Java Runtime Environment allows an attacker to remotely execute arbitrary code.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-1889',
      vendorProject: 'Microsoft',
      product: 'Forefront Threat Management Gateway (TMG)',
      vulnerabilityName:
        'Microsoft Forefront TMG Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A remote code execution vulnerability exists in the Forefront Threat Management Gateway (TMG) Firewall Client Winsock provider that could allow code execution in the security context of the client application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-0611',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Remote Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Flash Player contains a vulnerability that allows remote attackers to execute arbitrary code or cause a denial of service (application crash) via crafted Flash content.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-3333',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A stack-based buffer overflow vulnerability exists in the parsing of RTF data in Microsoft Office and earlier allows an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-0232',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Exception Handler Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The kernel in Microsoft Windows, when access to 16-bit applications is enabled on a 32-bit x86 platform, does not properly validate certain BIOS calls, which allows local users to gain privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-0188',
      vendorProject: 'Adobe',
      product: 'Reader and Acrobat',
      vulnerabilityName:
        'Adobe Reader and Acrobat Arbitrary Code Execution Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Unspecified vulnerability in Adobe Reader and Acrobat allows attackers to cause a denial of service or possibly execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-3129',
      vendorProject: 'Microsoft',
      product: 'Excel',
      vulnerabilityName:
        'Microsoft Excel Featheader Record Memory Corruption Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Microsoft Office Excel allows remote attackers to execute arbitrary code via a spreadsheet with a FEATHEADER record containing an invalid cbHdrData size element that affects a pointer offset.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-1123',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Improper Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'The kernel in Microsoft Windows does not properly validate changes to unspecified kernel objects, which allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2008-3431',
      vendorProject: 'Oracle',
      product: 'VirtualBox',
      vulnerabilityName:
        'Oracle VirtualBox Insufficient Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'An input validation vulnerability exists in the VBoxDrv.sys driver of Sun xVM VirtualBox which allows attackers to locally execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2008-2992',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Reader and Acrobat Input Validation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'Adobe Acrobat and Reader contain an input validation issue in a JavaScript method that could potentially lead to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2004-0210',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'A privilege elevation vulnerability exists in the POSIX subsystem. This vulnerability could allow a logged on user to take complete control of the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2002-0367',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-03-03',
      shortDescription:
        'smss.exe debugging subsystem in Microsoft Windows does not properly authenticate programs that connect to other programs, which allows local users to gain administrator or SYSTEM privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26486',
      vendorProject: 'Mozilla',
      product: 'Firefox',
      vulnerabilityName: 'Mozilla Firefox Use-After-Free Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Mozilla Firefox contains a use-after-free vulnerability in WebGPU IPC Framework which can be exploited to perform arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26485',
      vendorProject: 'Mozilla',
      product: 'Firefox',
      vulnerabilityName: 'Mozilla Firefox Use-After-Free Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Mozilla Firefox contains a use-after-free vulnerability in XSLT parameter processing which can be exploited to perform arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21973',
      vendorProject: 'VMware',
      product: 'vCenter Server and Cloud Foundation',
      vulnerabilityName:
        'VMware vCenter Server and Cloud Foundation Server Side Request Forgery (SSRF) Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'VMware vCenter Server and Cloud Foundation Server contain a SSRF vulnerability due to improper validation of URLs in a vCenter Server plugin. This allows for information disclosure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-03-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-8218',
      vendorProject: 'Pulse Secure',
      product: 'Pulse Connect Secure',
      vulnerabilityName: 'Pulse Connect Secure Code Injection Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'A code injection vulnerability exists in Pulse Connect Secure that allows an attacker to crafted a URI to perform an arbitrary code execution via the admin web interface.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11581',
      vendorProject: 'Atlassian',
      product: 'Jira Server and Data Center',
      vulnerabilityName:
        'Atlassian Jira Server and Data Center Server-Side Template Injection Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Atlassian Jira Server and Data Center contain a server-side template injection vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6077',
      vendorProject: 'NETGEAR',
      product: 'Wireless Router DGN2200',
      vulnerabilityName: 'NETGEAR DGN2200 Remote Code Execution Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'NETGEAR DGN2200 wireless routers contain a vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-6277',
      vendorProject: 'NETGEAR',
      product: 'Multiple Routers',
      vulnerabilityName:
        'NETGEAR Multiple Routers Remote Code Execution Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'NETGEAR confirmed multiple routers allow unauthenticated web pages to pass form input directly to the command-line interface, permitting remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0631',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Information Disclosure Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Adobe Coldfusion contains an unspecified vulnerability, which could result in information disclosure from a compromised server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0629',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName: 'Adobe ColdFusion Directory Traversal Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Adobe Coldfusion contains a directory traversal vulnerability, which could permit an unauthorized user access to restricted directories.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0625',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName: 'Adobe ColdFusion Authentication Bypass Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Adobe Coldfusion contains an authentication bypass vulnerability, which could result in an unauthorized user gaining administrative access.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-3960',
      vendorProject: 'Adobe',
      product: 'BlazeDS',
      vulnerabilityName: 'Adobe BlazeDS Information Disclosure Vulnerability',
      dateAdded: '2022-03-07',
      shortDescription:
        'Adobe BlazeDS, which is utilized in LifeCycle and Coldfusion, contains a vulnerability that allows for information disclosure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-07',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5135',
      vendorProject: 'SonicWall',
      product: 'SonicOS',
      vulnerabilityName: 'SonicWall SonicOS Buffer Overflow Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A buffer overflow vulnerability in SonicOS allows a remote attacker to cause Denial of Service (DoS) and potentially execute arbitrary code by sending a malicious request to the firewall.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1405',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Universal Plug and Play (UPnP) Service Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows UPnP service improperly allows COM object creation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1322',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows improperly handles authentication requests. An attacker who successfully exploited this vulnerability could run processes in an elevated context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1315',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Error Reporting Manager Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows Error Reporting manager improperly handles hard links. An attacker who successfully exploited this vulnerability could overwrite a targeted file leading to an elevated status.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1253',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Deployment Server Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows AppX Deployment Server improperly handles junctions.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1132',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists in Windows when the Win32k component fails to properly handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1129',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Deployment Service (AppXSVC) Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows AppXSVC improperly handles hard links. An attacker who successfully exploited this vulnerability could run processes in an elevated context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1069',
      vendorProject: 'Microsoft',
      product: 'Task Scheduler',
      vulnerabilityName:
        'Microsoft Task Scheduler Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists in the way the Task Scheduler Service validates certain file operations.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1064',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Deployment Service (AppXSVC) Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows AppXSVC improperly handles hard links. An attacker who successfully exploited this vulnerability could run processes in an elevated context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0841',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Deployment Service (AppXSVC) Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows AppXSVC improperly handles hard links. An attacker who successfully exploited this vulnerability could run processes in an elevated context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0543',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows improperly handles authentication requests. An attacker who successfully exploited this vulnerability could run processes in an elevated context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8120',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists in Windows when the Win32k component fails to properly handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0101',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Transaction Manager Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows Transaction Manager improperly handles objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3309',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows kernel fails to properly handle objects in memory. An attacker who successfully exploited this vulnerability could run arbitrary code in kernel mode.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2546',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Memory Corruption Vulnerability',
      dateAdded: '2022-03-15',
      shortDescription:
        'The kernel-mode driver in Microsoft Windows OS and Server allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26318',
      vendorProject: 'WatchGuard',
      product: 'Firebox and XTM Appliances',
      vulnerabilityName:
        'WatchGuard Firebox and XTM Appliances Arbitrary Code Execution',
      dateAdded: '2022-03-25',
      shortDescription:
        'On WatchGuard Firebox and XTM appliances, an unauthenticated user can execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26143',
      vendorProject: 'Mitel',
      product: 'MiCollab, MiVoice Business Express',
      vulnerabilityName:
        'MiCollab, MiVoice Business Express Access Control Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A vulnerability has been identified in MiCollab and MiVoice Business Express that may allow a malicious actor to gain unauthorized access to sensitive information and services, cause performance degradations or a denial of service condition on the affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-21999',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Print Spooler Privilege Escalation Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Microsoft Windows Print Spooler contains an unspecified vulnerability which can allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42237',
      vendorProject: 'Sitecore',
      product: 'XP',
      vulnerabilityName: 'Sitecore XP Remote Command Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Sitcore XP contains an insecure deserialization vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22941',
      vendorProject: 'Citrix',
      product: 'ShareFile',
      vulnerabilityName:
        'Citrix ShareFile Improper Access Control Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Improper Access Control in Citrix ShareFile storage zones controller may allow an unauthenticated attacker to remotely compromise the storage zones controller.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9377',
      vendorProject: 'D-Link',
      product: 'DIR-610 Devices',
      vulnerabilityName: 'D-Link DIR-610 Devices Remote Command Execution',
      dateAdded: '2022-03-25',
      shortDescription:
        'D-Link DIR-610 devices allow remote code execution via the cmd parameter to command.php.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9054',
      vendorProject: 'Zyxel',
      product: 'Multiple Network-Attached Storage (NAS) Devices',
      vulnerabilityName:
        'Zyxel Multiple NAS Devices OS Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Multiple Zyxel network-attached storage (NAS) devices contain a pre-authentication command injection vulnerability, which may allow a remote, unauthenticated attacker to execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-7247',
      vendorProject: 'OpenBSD',
      product: 'OpenSMTPD',
      vulnerabilityName: 'OpenSMTPD Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'smtp_mailaddr in smtp_session.c in OpenSMTPD, as used in OpenBSD and other products, allows remote attackers to execute arbitrary commands as root via a crafted SMTP session.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5410',
      vendorProject: 'VMware Tanzu',
      product: 'Spring Cloud Configuration (Config) Server',
      vulnerabilityName:
        'VMware Tanzu Spring Cloud Config Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Spring, by VMware Tanzu, Cloud Config contains a path traversal vulnerability that allows applications to serve arbitrary configuration files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-25223',
      vendorProject: 'Sophos',
      product: 'SG UTM',
      vulnerabilityName: 'Sophos SG UTM Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A remote code execution vulnerability exists in the WebAdmin of Sophos SG UTM.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-2506',
      vendorProject: 'QNAP Systems',
      product: 'Helpdesk',
      vulnerabilityName: 'QNAP Helpdesk Improper Access Control Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'QNAP Helpdesk contains an improper access control vulnerability which could allow an attacker to gain privileges or to read sensitive information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-2021',
      vendorProject: 'Palo Alto Networks',
      product: 'PAN-OS',
      vulnerabilityName:
        'Palo Alto Networks PAN-OS Authentication Bypass Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Palo Alto Networks PAN-OS contains a vulnerability in SAML which allows an attacker to bypass authentication.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1956',
      vendorProject: 'Apache',
      product: 'Kylin',
      vulnerabilityName: 'Apache Kylin OS Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Apache Kylin contains an OS command injection vulnerability which could permit an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1631',
      vendorProject: 'Juniper',
      product: 'Junos OS',
      vulnerabilityName: 'Juniper Junos OS Path Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A path traversal vulnerability in the HTTP/HTTPS service used by J-Web, Web Authentication, Dynamic-VPN (DVPN), Firewall Authentication Pass-Through with Web-Redirect, and Zero Touch Provisioning (ZTP) allows an unauthenticated attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-6340',
      vendorProject: 'Drupal',
      product: 'Core',
      vulnerabilityName: 'Drupal Core Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'In Drupal Core, some field types do not properly sanitize data from non-form sources. This can lead to arbitrary PHP code execution in some cases.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-2616',
      vendorProject: 'Oracle',
      product: 'BI Publisher (Formerly XML Publisher)',
      vulnerabilityName:
        'Oracle BI Publisher Unauthorized Access Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Oracle BI Publisher, formerly XML Publisher, contains an unspecified vulnerability that allows for various unauthorized actions. Open-source reporting attributes this vulnerability to allowing for authentication bypass.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-16920',
      vendorProject: 'D-Link',
      product: 'Multiple Routers',
      vulnerabilityName:
        'D-Link Multiple Routers Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Multiple D-Link routers contain a command injection vulnerability which can allow attackers to achieve full system compromise.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-15107',
      vendorProject: 'Webmin',
      product: 'Webmin',
      vulnerabilityName: 'Webmin Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'An issue was discovered in Webmin. The parameter old in password_change.cgi contains a command injection vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-12991',
      vendorProject: 'Citrix',
      product: 'SD-WAN and NetScaler',
      vulnerabilityName:
        'Citrix SD-WAN and NetScaler Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Authenticated Command Injection in Citrix SD-WAN Appliance and NetScaler SD-WAN Appliance.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-12989',
      vendorProject: 'Citrix',
      product: 'SD-WAN and NetScaler',
      vulnerabilityName:
        'Citrix SD-WAN and NetScaler SQL Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Citrix SD-WAN and NetScaler SD-WAN allow SQL Injection.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11043',
      vendorProject: 'PHP',
      product: 'FastCGI Process Manager (FPM)',
      vulnerabilityName:
        'PHP FastCGI Process Manager (FPM) Buffer Overflow Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'In some versions of PHP in certain configurations of FPM setup, it is possible to cause FPM module to write past allocated buffers allowing the possibility of remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-10068',
      vendorProject: 'Kentico',
      product: 'Xperience',
      vulnerabilityName:
        'Kentico Xperience Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Kentico contains a failure to validate security headers. This deserialization can led to unauthenticated remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1003030',
      vendorProject: 'Jenkins',
      product: 'Matrix Project Plugin',
      vulnerabilityName:
        'Jenkins Matrix Project Plugin Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Jenkins Matrix Project plugin contains a vulnerability which can allow users to escape the sandbox, opening opportunity to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0903',
      vendorProject: 'Microsoft',
      product: 'Graphics Device Interface (GDI)',
      vulnerabilityName: 'Microsoft GDI Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A remote code execution vulnerability exists in the way that the Windows Graphics Device Interface (GDI) handles objects in the memory. An attacker who successfully exploited this vulnerability could take control of the affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8414',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Shell Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A remote code execution vulnerability exists when the Windows Shell does not properly validate file paths.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8373',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer Scripting Engine',
      vulnerabilityName:
        'Microsoft Scripting Engine Memory Corruption Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A remote code execution vulnerability exists in the way that the scripting engine handles objects in memory in Internet Explorer.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-6961',
      vendorProject: 'VMware',
      product: 'SD-WAN Edge',
      vulnerabilityName:
        'VMware SD-WAN Edge by VeloCloud Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'VMware SD-WAN Edge by VeloCloud contains a command injection vulnerability in the local web UI component. Successful exploitation of this issue could result in remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-14839',
      vendorProject: 'LG',
      product: 'N1A1 NAS',
      vulnerabilityName: 'LG N1A1 NAS Remote Command Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'LG N1A1 NAS 3718.510 is affected by a remote code execution vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-1273',
      vendorProject: 'VMware Tanzu',
      product: 'Spring Data Commons',
      vulnerabilityName:
        'VMware Tanzu Spring Data Commons Property Binder Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Spring Data Commons contains a property binder vulnerability which can allow an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-11138',
      vendorProject: 'Quest',
      product: 'KACE System Management Appliance',
      vulnerabilityName:
        'Quest KACE System Management Appliance Remote Command Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        "The '/common/download_agent_installer.php' script in the Quest KACE System Management Appliance is accessible by anonymous users and can be abused to perform remote code execution.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0147',
      vendorProject: 'Cisco',
      product: 'Secure Access Control System (ACS)',
      vulnerabilityName:
        'Cisco Secure Access Control System Java Deserialization Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A vulnerability in Java deserialization used by Cisco Secure Access Control System (ACS) could allow an unauthenticated, remote attacker to execute arbitrary commands on an affected device. The vulnerability is due to insecure deserialization of user-supplied content by the affected software.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-0125',
      vendorProject: 'Cisco',
      product: 'VPN Routers',
      vulnerabilityName:
        'Cisco VPN Routers Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A vulnerability in the web interface of the Cisco VPN Routers could allow an unauthenticated, remote attacker to execute arbitrary code as root and gain full control of an affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6334',
      vendorProject: 'NETGEAR',
      product: 'DGN2200 Devices',
      vulnerabilityName:
        'NETGEAR DGN2200 Devices OS Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'dnslookup.cgi on NETGEAR DGN2200 devices with firmware through 10.0.0.50 allows remote authenticated users to execute arbitrary OS commands',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6316',
      vendorProject: 'Citrix',
      product:
        'NetScaler SD-WAN Enterprise, CloudBridge Virtual WAN, and XenMobile Server',
      vulnerabilityName:
        'Citrix Multiple Products Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A vulnerability has been identified in the management interface of Citrix NetScaler SD-WAN Enterprise and Standard Edition and Citrix CloudBridge Virtual WAN Edition that could result in an unauthenticated, remote attacker being able to execute arbitrary code as a root user. This vulnerability also affects XenMobile Server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-3881',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE',
      vulnerabilityName:
        'Cisco IOS and IOS XE Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A vulnerability in the Cisco Cluster Management Protocol (CMP) processing code in Cisco IOS and Cisco IOS XE Software could allow an unauthenticated, remote attacker to cause a reload of an affected device or remotely execute code with elevated privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12617',
      vendorProject: 'Apache',
      product: 'Tomcat',
      vulnerabilityName: 'Apache Tomcat Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'When running Apache Tomcat, it is possible to upload a JSP file to the server via a specially crafted request. This JSP could then be requested and any code it contained would be executed by the server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-12615',
      vendorProject: 'Apache',
      product: 'Tomcat',
      vulnerabilityName:
        'Apache Tomcat on Windows Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'When running Apache Tomcat on Windows with HTTP PUTs enabled, it is possible to upload a JSP file to the server via a specially crafted request. This JSP could then be requested and any code it contained would be executed by the server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0146',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows SMB Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'The SMBv1 server in Microsoft Windows allows remote attackers to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7892',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Adobe Flash Player has an exploitable use-after-free vulnerability in the TextField class.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4171',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Unspecified vulnerability in Adobe Flash Player allows for remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-1555',
      vendorProject: 'NETGEAR',
      product: 'Wireless Access Point (WAP) Devices',
      vulnerabilityName:
        'NETGEAR Multiple WAP Devices Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Multiple NETGEAR Wireless Access Point devices allows unauthenticated web pages to pass form input directly to the command-line interface. Exploitation allows for arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-11021',
      vendorProject: 'D-Link',
      product: 'DCS-930L Devices',
      vulnerabilityName:
        'D-Link DCS-930L Devices OS Command Injection Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'setSystemCommand on D-Link DCS-930L devices allows a remote attacker to execute code via an OS command.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-10174',
      vendorProject: 'NETGEAR',
      product: 'WNR2000v5 Router',
      vulnerabilityName:
        'NETGEAR WNR2000v5 Router Buffer Overflow Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'The NETGEAR WNR2000v5 router contains a buffer overflow which can be exploited to achieve remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0752',
      vendorProject: 'Rails',
      product: 'Ruby on Rails',
      vulnerabilityName: 'Ruby on Rails Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Directory traversal vulnerability in Action View in Ruby on Rails allows remote attackers to read arbitrary files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-4068',
      vendorProject: 'Arcserve',
      product: 'Unified Data Protection (UDP)',
      vulnerabilityName:
        'Arcserve Unified Data Protection (UDP) Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Directory traversal vulnerability in Arcserve UDP allows remote attackers to obtain sensitive information or cause a denial of service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-3035',
      vendorProject: 'TP-Link',
      product: 'Multiple Archer Devices',
      vulnerabilityName:
        'TP-Link Multiple Archer Devices Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Directory traversal vulnerability in multiple TP-Link Archer devices allows remote attackers to read arbitrary files via a .. (dot dot) in the PATH_INFO to login/.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1427',
      vendorProject: 'Elastic',
      product: 'Elasticsearch',
      vulnerabilityName:
        'Elasticsearch Groovy Scripting Engine Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'The Groovy scripting engine in Elasticsearch allows remote attackers to bypass the sandbox protection mechanism and execute arbitrary shell commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1187',
      vendorProject: 'D-Link and TRENDnet',
      product: 'Multiple Devices',
      vulnerabilityName:
        'D-Link and TRENDnet Multiple Devices Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'The ping tool in multiple D-Link and TRENDnet devices allow remote attackers to perform remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-0666',
      vendorProject: 'Cisco',
      product: 'Prime Data Center Network Manager (DCNM)',
      vulnerabilityName:
        'Cisco Prime Data Center Network Manager (DCNM) Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Directory traversal vulnerability in the fmserver servlet in Cisco Prime Data Center Network Manager (DCNM) allows remote attackers to read arbitrary files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-6332',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Object Linking & Embedding (OLE) Automation Array Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'OleAut32.dll in OLE in Microsoft Windows allows remote attackers to remotely execute code via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-6324',
      vendorProject: 'Microsoft',
      product: 'Kerberos Key Distribution Center (KDC)',
      vulnerabilityName:
        'Microsoft Kerberos Key Distribution Center (KDC) Privilege Escalation Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'The Kerberos Key Distribution Center (KDC) in Microsoft allows remote authenticated domain users to obtain domain administrator privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-6287',
      vendorProject: 'Rejetto',
      product: 'HTTP File Server (HFS)',
      vulnerabilityName:
        'Rejetto HTTP File Server (HFS) Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'The findMacroMarker function in parserLib.pas in Rejetto HTTP File Server (HFS or HttpFileServer) allows remote attackers to execute arbitrary programs.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-3120',
      vendorProject: 'Elastic',
      product: 'Elasticsearch',
      vulnerabilityName: 'Elasticsearch Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Elasticsearch enables dynamic scripting, which allows remote attackers to execute arbitrary MVEL expressions and Java code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0130',
      vendorProject: 'Rails',
      product: 'Ruby on Rails',
      vulnerabilityName: 'Ruby on Rails Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Directory traversal vulnerability in actionpack/lib/abstract_controller/base.rb in the implicit-render implementation in Ruby on Rails allows remote attackers to read arbitrary files via a crafted request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-5223',
      vendorProject: 'D-Link',
      product: 'DSL-2760U',
      vulnerabilityName:
        'D-Link DSL-2760U Gateway Cross-Site Scripting Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A cross-site scripting (XSS) vulnerability exists in the D-Link DSL-2760U gateway, allowing remote authenticated users to inject arbitrary web script or HTML.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-4810',
      vendorProject: 'Hewlett Packard (HP)',
      product:
        'ProCurve Manager (PCM), PCM+, Identity Driven Manager (IDM), and Application Lifecycle Management',
      vulnerabilityName:
        'HP Multiple Products Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'HP ProCurve Manager (PCM), PCM+, Identity Driven Manager (IDM), and Application Lifecycle Management allow remote attackers to execute arbitrary code via a marshalled object to (1) EJBInvokerServlet or (2) JMXInvokerServlet.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2251',
      vendorProject: 'Apache',
      product: 'Struts',
      vulnerabilityName:
        'Apache Struts Improper Input Validation Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Apache Struts allows remote attackers to execute arbitrary Object-Graph Navigation Language (OGNL) expressions.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-1823',
      vendorProject: 'PHP',
      product: 'PHP',
      vulnerabilityName: 'PHP-CGI Query String Parameter Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'sapi/cgi/cgi_main.c in PHP, when configured as a CGI script, does not properly handle query strings, which allows remote attackers to execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-4345',
      vendorProject: 'Exim',
      product: 'Exim',
      vulnerabilityName: 'Exim Privilege Escalation Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Exim allows local users to gain privileges by leveraging the ability of the exim user account to specify an alternate configuration file with a directive that contains arbitrary commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-4344',
      vendorProject: 'Exim',
      product: 'Exim',
      vulnerabilityName: 'Exim Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Heap-based buffer overflow in the string_vformat function in string.c in Exim before 4.70 allows remote attackers to execute arbitrary code via an SMTP session.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-3035',
      vendorProject: 'Cisco',
      product: 'IOS XR',
      vulnerabilityName:
        'Cisco IOS XR Border Gateway Protocol (BGP) Denial-of-Service Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Cisco IOS XR, when BGP is the configured routing feature, allows remote attackers to cause a denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-2861',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName: 'Adobe ColdFusion Directory Traversal Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'A directory traversal vulnerability exists in the administrator console in Adobe ColdFusion which allows remote attackers to read arbitrary files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-2055',
      vendorProject: 'Cisco',
      product: 'IOS XR',
      vulnerabilityName:
        'Cisco IOS XR Border Gateway Protocol (BGP) Denial-of-Service Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Cisco IOS XR,when BGP is the configured routing feature, allows remote attackers to cause a denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-1151',
      vendorProject: 'phpMyAdmin',
      product: 'phpMyAdmin',
      vulnerabilityName: 'phpMyAdmin Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Setup script used to generate configuration can be fooled using a crafted POST request to include arbitrary PHP code in generated configuration file.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-0927',
      vendorProject: 'Adobe',
      product: 'Reader and Acrobat',
      vulnerabilityName:
        'Adobe Reader and Adobe Acrobat Stack-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'Stack-based buffer overflow in Adobe Reader and Adobe Acrobat allows remote attackers to execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2005-2773',
      vendorProject: 'Hewlett Packard (HP)',
      product: 'OpenView Network Node Manager',
      vulnerabilityName:
        'HP OpenView Network Node Manager Remote Code Execution Vulnerability',
      dateAdded: '2022-03-25',
      shortDescription:
        'HP OpenView Network Node Manager could allow a remote attacker to execute arbitrary commands on the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-1096',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-0543',
      vendorProject: 'Redis',
      product: 'Debian-specific Redis Servers',
      vulnerabilityName:
        'Debian-specific Redis Server Lua Sandbox Escape Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Redis is prone to a (Debian-specific) Lua sandbox escape, which could result in remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38646',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Access Connectivity Engine Remote Code Execution Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Office Access Connectivity Engine contains an unspecified vulnerability which can allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-34486',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Event Tracing Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Windows Event Tracing contains an unspecified vulnerability which can allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-26085',
      vendorProject: 'Atlassian',
      product: 'Confluence Server',
      vulnerabilityName:
        'Atlassian Confluence Server Pre-Authorization Arbitrary File Read Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Affected versions of Atlassian Confluence Server allow remote attackers to view restricted resources via a pre-authorization arbitrary file read vulnerability in the /s/ endpoint.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-20028',
      vendorProject: 'SonicWall',
      product: 'Secure Remote Access (SRA)',
      vulnerabilityName:
        'SonicWall Secure Remote Access (SRA) SQL Injection Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'SonicWall Secure Remote Access (SRA) products contain an improper neutralization of a SQL Command leading to SQL injection.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7483',
      vendorProject: 'SonicWall',
      product: 'SMA100',
      vulnerabilityName: 'SonicWall SMA100 Directory Traversal Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'In SonicWall SMA100, an unauthenticated Directory Traversal vulnerability in the handleWAFRedirect CGI allows the user to test for the presence of a file on the server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8440',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'An elevation of privilege vulnerability exists when Windows improperly handles calls to Advanced Local Procedure Call (ALPC).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8406',
      vendorProject: 'Microsoft',
      product: 'DirectX Graphics Kernel (DXGKRNL)',
      vulnerabilityName:
        'Microsoft DirectX Graphics Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'An elevation of privilege vulnerability exists when the DirectX Graphics Kernel (DXGKRNL) driver improperly handles objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8405',
      vendorProject: 'Microsoft',
      product: 'DirectX Graphics Kernel (DXGKRNL)',
      vulnerabilityName:
        'Microsoft DirectX Graphics Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'An elevation of privilege vulnerability exists when the DirectX Graphics Kernel (DXGKRNL) driver improperly handles objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0213',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Windows COM Aggregate Marshaler allows for privilege escalation when an attacker runs a specially crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0059',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Information Disclosure Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Internet Explorer allow remote attackers to obtain sensitive information from process memory via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0037',
      vendorProject: 'Microsoft',
      product: 'Edge and Internet Explorer',
      vulnerabilityName:
        'Microsoft Edge and Internet Explorer Type Confusion Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Edge and Internet Explorer have a type confusion vulnerability in mshtml.dll, which allows remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7201',
      vendorProject: 'Microsoft',
      product: 'Edge',
      vulnerabilityName: 'Microsoft Edge Memory Corruption Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The Chakra JavaScript scripting engine in Microsoft Edge allows remote attackers to execute remote code or cause a denial of service (memory corruption) via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7200',
      vendorProject: 'Microsoft',
      product: 'Edge',
      vulnerabilityName: 'Microsoft Edge Memory Corruption Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The Chakra JavaScript scripting engine in Microsoft Edge allows remote attackers to execute remote code or cause a denial of service (memory corruption) via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0189',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The Microsoft JScript nd VBScript engines, as used in Internet Explorer and other products, allow attackers to execute remote code or cause a denial of service (memory corruption) via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0151',
      vendorProject: 'Microsoft',
      product: 'Client-Server Run-time Subsystem (CSRSS)',
      vulnerabilityName:
        'Microsoft Windows CSRSS Security Feature Bypass Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The Client-Server Run-time Subsystem (CSRSS) in Microsoft mismanages process tokens, which allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0040',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The kernel in Microsoft Windows allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2426',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Adobe Type Manager Library Remote Code Execution Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'A remote code execution vulnerability exists in Microsoft Windows when the Windows Adobe Type Manager Library improperly handles specially crafted OpenType fonts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2419',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'JScript in Microsoft Internet Explorer allows remote attackers to execute remote code or cause a denial of service (memory corruption) via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1770',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Uninitialized Memory Use Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Office allows remote attackers to execute arbitrary code via a crafted Office document.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3660',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The EPATHOBJ::pprFlattenRec function in win32k.sys in the kernel-mode drivers in Microsoft does not properly initialize a pointer for the next object in a certain list, which allows local users to gain privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2729',
      vendorProject: 'Adobe',
      product: 'Reader and Acrobat',
      vulnerabilityName:
        'Adobe Reader and Acrobat Arbitrary Integer Overflow Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Integer overflow vulnerability in Adobe Reader and Acrobat allows attackers to execute remote code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2551',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Use-After-Free Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Use-after-free vulnerability in Microsoft Internet Explorer allows remote attackers to execute remote code via a crafted web site that triggers access to a deleted object.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2465',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName: 'Oracle Java SE Unspecified Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Unspecified vulnerability in the Java Runtime Environment (JRE) component in Oracle Java SE allows remote attackers to affect confidentiality, integrity, and availability via Unknown vectors related to 2D',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-1690',
      vendorProject: 'Mozilla',
      product: 'Firefox and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox and Thunderbird Denial-of-Service Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Mozilla Firefox and Thunderbird do not properly handle onreadystatechange events in conjunction with page reloading, which allows remote attackers to cause a denial-of-service (DoS) or possibly execute malicious code via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-5076',
      vendorProject: 'Oracle',
      product: 'Java SE',
      vulnerabilityName: 'Oracle Java SE Sandbox Bypass Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'The default Java security properties configuration did not restrict access to the com.sun.org.glassfish.external and com.sun.org.glassfish.gmbal packages. An untrusted Java application or applet could use these flaws to bypass Java sandbox restrictions.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-2539',
      vendorProject: 'Microsoft',
      product: 'Word',
      vulnerabilityName: 'Microsoft Word Remote Code Execution Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Microsoft Word allows attackers to execute remote code or cause a denial-of-service (DoS) via crafted RTF data.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-2034',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Memory Corruption Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Adobe Flash Player contains a memory corruption vulnerability that allows for remote code execution or denial-of-service (DoS).',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0518',
      vendorProject: 'Oracle',
      product: 'Fusion Middleware',
      vulnerabilityName: 'Oracle Fusion Middleware Unspecified Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Unspecified vulnerability in the Oracle Application Server Single Sign-On component in Oracle Fusion Middleware allows remote attackers to affect integrity via Unknown vectors',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-2005',
      vendorProject: 'Microsoft',
      product: 'Ancillary Function Driver (afd.sys)',
      vulnerabilityName:
        'Microsoft Ancillary Function Driver (afd.sys) Improper Input Validation Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'afd.sys in the Ancillary Function Driver in Microsoft Windows does not properly validate user-mode input passed to kernel mode, which allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-4398',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Stack-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-03-28',
      shortDescription:
        'Stack-based buffer overflow in the RtlQueryRegistryValues function in win32k.sys in Microsoft Windows allows local users to gain privileges, and bypass the User Account Control (UAC) feature.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26871',
      vendorProject: 'Trend Micro',
      product: 'Apex Central',
      vulnerabilityName:
        'Trend Micro Apex Central Arbitrary File Upload Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'An arbitrary file upload vulnerability in Trend Micro Apex Central could allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-1040',
      vendorProject: 'Sophos',
      product: 'Firewall',
      vulnerabilityName: 'Sophos Firewall Authentication Bypass Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'An authentication bypass vulnerability in User Portal and Webadmin of Sophos Firewall allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-34484',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows User Profile Service Privilege Escalation Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'Microsoft Windows User Profile Service contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-28799',
      vendorProject: 'QNAP',
      product: 'Network Attached Storage (NAS)',
      vulnerabilityName: 'QNAP NAS Improper Authorization Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'QNAP NAS running HBS 3 contains an improper authorization vulnerability which can allow remote attackers to log in to a device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-21551',
      vendorProject: 'Dell',
      product: 'dbutil Driver',
      vulnerabilityName:
        'Dell dbutil Driver Insufficient Access Control Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'Dell dbutil driver contains an insufficient access control vulnerability which may lead to escalation of privileges, denial-of-service (DoS), or information disclosure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-10562',
      vendorProject: 'Dasan',
      product: 'Gigabit Passive Optical Network (GPON) Routers',
      vulnerabilityName: 'Dasan GPON Routers Command Injection Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'Dasan GPON Routers contain an authentication bypass vulnerability. When combined with CVE-2018-10561, exploitation can allow an attacker to perform remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-10561',
      vendorProject: 'Dasan',
      product: 'Gigabit Passive Optical Network (GPON) Routers',
      vulnerabilityName:
        'Dasan GPON Routers Authentication Bypass Vulnerability',
      dateAdded: '2022-03-31',
      shortDescription:
        'Dasan GPON Routers contain an authentication bypass vulnerability. When combined with CVE-2018-10562, exploitation can allow an attacker to perform remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22965',
      vendorProject: 'VMware',
      product: 'Spring Framework',
      vulnerabilityName:
        'Spring Framework JDK 9+ Remote Code Execution Vulnerability',
      dateAdded: '2022-04-04',
      shortDescription:
        'Spring MVC or Spring WebFlux application running on JDK 9+ may be vulnerable to remote code execution (RCE) via data binding.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22675',
      vendorProject: 'Apple',
      product: 'macOS',
      vulnerabilityName: 'Apple macOS Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-04-04',
      shortDescription:
        'macOS Monterey contains an out-of-bounds write vulnerability that could allow an application to execute arbitrary code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22674',
      vendorProject: 'Apple',
      product: 'macOS',
      vulnerabilityName: 'Apple macOS Out-of-Bounds Read Vulnerability',
      dateAdded: '2022-04-04',
      shortDescription:
        'macOS Monterey contains an out-of-bounds read vulnerability that could allow an application to read kernel memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-45382',
      vendorProject: 'D-Link',
      product: 'Multiple Routers',
      vulnerabilityName:
        'D-Link Multiple Routers Remote Code Execution Vulnerability',
      dateAdded: '2022-04-04',
      shortDescription:
        'A remote code execution vulnerability exists in all series H/W revisions routers via the DDNS function in ncc2 binary file.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-04-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-3156',
      vendorProject: 'Sudo',
      product: 'Sudo',
      vulnerabilityName: 'Sudo Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-04-06',
      shortDescription:
        'Sudo contains an off-by-one error that can result in a heap-based buffer overflow, which allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31166',
      vendorProject: 'Microsoft',
      product: 'HTTP Protocol Stack',
      vulnerabilityName:
        'Microsoft HTTP Protocol Stack Remote Code Execution Vulnerability',
      dateAdded: '2022-04-06',
      shortDescription:
        'Microsoft HTTP Protocol Stack contains a vulnerability in http.sys that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0148',
      vendorProject: 'Microsoft',
      product: 'SMBv1 server',
      vulnerabilityName:
        'Microsoft SMBv1 Server Remote Code Execution Vulnerability',
      dateAdded: '2022-04-06',
      shortDescription:
        'The SMBv1 server in Microsoft allows remote attackers to execute arbitrary code via crafted packets.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-04-27',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-23176',
      vendorProject: 'WatchGuard',
      product: 'Firebox and XTM',
      vulnerabilityName:
        'WatchGuard Firebox and XTM Privilege Escalation Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'WatchGuard Firebox and XTM appliances allow a remote attacker with unprivileged credentials to access the system with a privileged management session via exposed management access.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42287',
      vendorProject: 'Microsoft',
      product: 'Active Directory',
      vulnerabilityName:
        'Microsoft Active Directory Domain Services Privilege Escalation Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'Microsoft Active Directory Domain Services contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-42278',
      vendorProject: 'Microsoft',
      product: 'Active Directory',
      vulnerabilityName:
        'Microsoft Active Directory Domain Services Privilege Escalation Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'Microsoft Active Directory Domain Services contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-39793',
      vendorProject: 'Google',
      product: 'Pixel',
      vulnerabilityName: 'Google Pixel Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'Google Pixel contains a possible out-of-bounds write due to a logic error in the code that could lead to local escalation of privilege.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27852',
      vendorProject: 'Checkbox',
      product: 'Checkbox Survey',
      vulnerabilityName:
        'Checkbox Survey Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'Deserialization of Untrusted Data vulnerability in CheckboxWeb.dll of Checkbox Survey allows an unauthenticated remote attacker to execute arbitrary code.',
      requiredAction:
        'Versions 6 and earlier for this product are end-of-life and must be removed from agency networks. Versions 7 and later are not considered vulnerable.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-22600',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'Linux Kernel contains a flaw in the packet socket (AF_PACKET) implementation which could lead to incorrectly freeing memory. A local user could exploit this for denial-of-service (DoS) or possibly for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-2509',
      vendorProject: 'QNAP',
      product: 'QNAP Network-Attached Storage (NAS)',
      vulnerabilityName:
        'QNAP Network-Attached Storage (NAS) Command Injection Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'QNAP NAS devices contain a command injection vulnerability which could allow attackers to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-11317',
      vendorProject: 'Telerik',
      product: 'User Interface (UI) for ASP.NET AJAX',
      vulnerabilityName:
        'Telerik UI for ASP.NET AJAX Unrestricted File Upload Vulnerability',
      dateAdded: '2022-04-11',
      shortDescription:
        'Telerik.Web.UI in Progress Telerik UI for ASP.NET AJAX allows remote attackers to perform arbitrary file uploads or execute arbitrary code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24521',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows CLFS Driver Privilege Escalation Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Microsoft Windows Common Log File System (CLFS) Driver contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-7602',
      vendorProject: 'Drupal',
      product: 'Core',
      vulnerabilityName: 'Drupal Core Remote Code Execution Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'A remote code execution vulnerability exists within multiple subsystems of Drupal that can allow attackers to exploit multiple attack vectors on a Drupal site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-20753',
      vendorProject: 'Kaseya',
      product: 'Virtual System/Server Administrator (VSA)',
      vulnerabilityName: 'Kaseya VSA Remote Code Execution Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Kaseya VSA RMM allows unprivileged remote attackers to execute PowerShell payloads on all managed devices.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-5123',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Use-after-free vulnerability in the BitmapData class in the ActionScript 3 (AS3) implementation in Adobe Flash Player allows remote attackers to execute code or cause a denial-of-service (DoS).',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-5122',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Use-after-free vulnerability in the DisplayObject class in the ActionScript 3 (AS3) implementation in Adobe Flash Player allows remote attackers to execute code or cause a denial-of-service (DoS).',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-3113',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Heap-based buffer overflow vulnerability in Adobe Flash Player allows remote attackers to execute code.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2502',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability that allows an attacker to execute code or cause a denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-0313',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Use-After-Free Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Use-after-free vulnerability in Adobe Flash Player allows remote attackers to execute code.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-0311',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Remote Code Execution Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Unspecified vulnerability in Adobe Flash Player allows remote attackers to execute code.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-9163',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Stack-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-04-13',
      shortDescription:
        'Stack-based buffer overflow in Adobe Flash Player allows attackers to execute code remotely.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22954',
      vendorProject: 'VMware',
      product: 'Workspace ONE Access and Identity Manager',
      vulnerabilityName:
        'VMware Workspace ONE Access and Identity Manager Server-Side Template Injection Vulnerability',
      dateAdded: '2022-04-14',
      shortDescription:
        'VMware Workspace ONE Access and Identity Manager allow for remote code execution due to server-side template injection.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-05',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22960',
      vendorProject: 'VMware',
      product: 'Multiple Products',
      vulnerabilityName:
        'VMware Multiple Products Privilege Escalation Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'VMware Workspace ONE Access, Identity Manager and vRealize Automation contain a privilege escalation vulnerability due to improper permissions in support scripts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-1364',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-3929',
      vendorProject: 'Crestron',
      product: 'Multiple Products',
      vulnerabilityName:
        'Crestron Multiple Products Command Injection Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'Multiple Crestron products are vulnerable to command injection via the file_transfer.cgi HTTP endpoint. A remote, unauthenticated attacker can use this vulnerability to execute operating system commands as root.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-16057',
      vendorProject: 'D-Link',
      product: 'DNS-320 Storage Device',
      vulnerabilityName: 'D-Link DNS-320 Remote Code Execution Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'The login_mgr.cgi script in D-Link DNS-320 is vulnerable to remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-7841',
      vendorProject: 'Schneider Electric',
      product: 'U.motion Builder',
      vulnerabilityName:
        'Schneider Electric U.motion Builder SQL Injection Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'A SQL Injection vulnerability exists in U.motion Builder software which could cause unwanted code execution when an improper set of characters is entered.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4523',
      vendorProject: 'Trihedral',
      product: 'VTScada (formerly VTS)',
      vulnerabilityName:
        'Trihedral VTScada (formerly VTS) Denial-of-Service Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'The WAP interface in Trihedral VTScada (formerly VTS) allows remote attackers to cause a denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0780',
      vendorProject: 'InduSoft',
      product: 'Web Studio',
      vulnerabilityName:
        'InduSoft Web Studio NTWebServer Directory Traversal Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'InduSoft Web Studio NTWebServer contains a directory traversal vulnerability that allows remote attackers to read administrative passwords in APP files, allowing for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-5330',
      vendorProject: 'Ubiquiti',
      product: 'AirOS',
      vulnerabilityName: 'Ubiquiti AirOS Command Injection Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'Certain Ubiquiti devices contain a command injection vulnerability via a GET request to stainfo.cgi.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2007-3010',
      vendorProject: 'Alcatel',
      product: 'OmniPCX Enterprise',
      vulnerabilityName:
        'Alcatel OmniPCX Enterprise Remote Code Execution Vulnerability',
      dateAdded: '2022-04-15',
      shortDescription:
        'masterCGI in the Unified Maintenance Tool in Alcatel OmniPCX Enterprise Communication Server allows remote attackers to execute arbitrary commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-6882',
      vendorProject: 'Zimbra',
      product: 'Collaboration Suite (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration Suite (ZCS) Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2022-04-19',
      shortDescription:
        'Zimbra Collaboration Suite (ZCS) contains a cross-site scripting vulnerability that might allow remote attackers to inject arbitrary web script or HTML.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-10',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-3568',
      vendorProject: 'Meta Platforms',
      product: 'WhatsApp',
      vulnerabilityName: 'WhatsApp VOIP Stack Buffer Overflow Vulnerability',
      dateAdded: '2022-04-19',
      shortDescription:
        'A buffer overflow vulnerability in WhatsApp VOIP stack allowed remote code execution via specially crafted series of RTCP packets sent to a target phone number.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22718',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Print Spooler Privilege Escalation Vulnerability',
      dateAdded: '2022-04-19',
      shortDescription:
        'Microsoft Windows Print Spooler contains an unspecified vulnerability which allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-29464',
      vendorProject: 'WSO2',
      product: 'Multiple Products',
      vulnerabilityName:
        'WSO2 Multiple Products Unrestrictive Upload of File Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Multiple WSO2 products allow for unrestricted file upload, resulting in remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26904',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows User Profile Service Privilege Escalation Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Microsoft Windows User Profile Service contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-21919',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows User Profile Service Privilege Escalation Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Microsoft Windows User Profile Service contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-0847',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Linux kernel contains an improper initialization vulnerability where an unprivileged local user could escalate their privileges on the system. This vulnerability has the moniker of "Dirty Pipe."',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-41357',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40450',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1003029',
      vendorProject: 'Jenkins',
      product: 'Script Security Plugin',
      vulnerabilityName:
        'Jenkins Script Security Plugin Sandbox Bypass Vulnerability',
      dateAdded: '2022-04-25',
      shortDescription:
        'Jenkins Script Security Plugin contains a protection mechanism failure, allowing an attacker to bypass the sandbox.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1789',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Type Confusion Vulnerability',
      dateAdded: '2022-05-04',
      shortDescription:
        'A type confusion issue affecting multiple Apple products allows processing of maliciously crafted web content, leading to arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-8506',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Type Confusion Vulnerability',
      dateAdded: '2022-05-04',
      shortDescription:
        'A type confusion issue affecting multiple Apple products allows processing of maliciously crafted web content, leading to arbitrary code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-4113',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-05-04',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0322',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Use-After-Free Vulnerability',
      dateAdded: '2022-05-04',
      shortDescription:
        'Use-after-free vulnerability in Microsoft Internet Explorer allows remote attackers to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0160',
      vendorProject: 'OpenSSL',
      product: 'OpenSSL',
      vulnerabilityName: 'OpenSSL Information Disclosure Vulnerability',
      dateAdded: '2022-05-04',
      shortDescription:
        'The TLS and DTLS implementations in OpenSSL do not properly handle Heartbeat Extension packets, which allows remote attackers to obtain sensitive information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-1388',
      vendorProject: 'F5',
      product: 'BIG-IP',
      vulnerabilityName: 'F5 BIG-IP Missing Authentication Vulnerability',
      dateAdded: '2022-05-10',
      shortDescription:
        'F5 BIG-IP contains a missing authentication in critical function vulnerability which can allow for remote code execution, creation or deletion of files, or disabling services.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-05-31',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-30525',
      vendorProject: 'Zyxel',
      product: 'Multiple Firewalls',
      vulnerabilityName:
        'Zyxel Multiple Firewalls OS Command Injection Vulnerability',
      dateAdded: '2022-05-16',
      shortDescription:
        'A command injection vulnerability in the CGI program of some Zyxel firewall versions could allow an attacker to modify specific files and then execute some OS commands on a vulnerable device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22947',
      vendorProject: 'VMware',
      product: 'Spring Cloud Gateway',
      vulnerabilityName:
        'VMware Spring Cloud Gateway Code Injection Vulnerability',
      dateAdded: '2022-05-16',
      shortDescription:
        'Spring Cloud Gateway applications are vulnerable to a code injection attack when the Gateway Actuator endpoint is enabled, exposed and unsecured.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-20821',
      vendorProject: 'Cisco',
      product: 'IOS XR',
      vulnerabilityName: 'Cisco IOS XR Open Port Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Cisco IOS XR software health check opens TCP port 6379 by default on activation. An attacker can connect to the Redis instance on the open port and allow access to the Redis instance that is running within the NOSi container.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-1048',
      vendorProject: 'Android',
      product: 'Kernel',
      vulnerabilityName: 'Android Kernel Use-After-Free Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Android kernel contains a use-after-free vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-0920',
      vendorProject: 'Android',
      product: 'Kernel',
      vulnerabilityName: 'Android Kernel Race Condition Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Android kernel contains a race condition, which allows for a use-after-free vulnerability. Exploitation can allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30883',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Apple iOS, macOS, watchOS, and tvOS contain a memory corruption vulnerability that could allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-1027',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'An elevation of privilege vulnerability exists in the way that the Windows Kernel handles objects in memory. An attacker who successfully exploited the vulnerability could execute code with elevated permissions.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-0638',
      vendorProject: 'Microsoft',
      product: 'Update Notification Manager',
      vulnerabilityName:
        'Microsoft Update Notification Manager Privilege Escalation Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Microsoft Update Notification Manager contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7286',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Apple iOS, macOS, watchOS, and tvOS contain a memory corruption vulnerability that could allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7287',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS Memory Corruption Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Apple iOS contains a memory corruption vulnerability which could allow an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0676',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Information Disclosure Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'An information disclosure vulnerability exists when Internet Explorer improperly handles objects in memory. An attacker who successfully exploited this vulnerability could test for the presence of files on disk.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-5786',
      vendorProject: 'Google',
      product: 'Chrome Blink',
      vulnerabilityName: 'Google Chrome Blink Use-After-Free Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Google Chrome Blink contains a heap use-after-free vulnerability that allows an attacker to potentially perform out of bounds memory access via a crafted HTML page.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0703',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows SMB Information Disclosure Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'An information disclosure vulnerability exists in the way that the Windows SMB Server handles certain requests, which could lead to information disclosure from the server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-0880',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows Privilege Escalation Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'A local elevation of privilege vulnerability exists in how splwow64.exe handles certain calls. An attacker who successfully exploited the vulnerability could elevate privileges on an affected system from low-integrity to medium-integrity.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-13720',
      vendorProject: 'Google',
      product: 'Chrome WebAudio',
      vulnerabilityName: 'Google Chrome WebAudio Use-After-Free Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Google Chrome WebAudio contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11707',
      vendorProject: 'Mozilla',
      product: 'Firefox and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox and Thunderbird Type Confusion Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Mozilla Firefox and Thunderbird contain a type confusion vulnerability that can occur when manipulating JavaScript objects due to issues in Array.pop, allowing for an exploitable crash.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-11708',
      vendorProject: 'Mozilla',
      product: 'Firefox and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox and Thunderbird Sandbox Escape Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Mozilla Firefox and Thunderbird contain a sandbox escape vulnerability that could result in remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-8720',
      vendorProject: 'WebKitGTK',
      product: 'WebKitGTK',
      vulnerabilityName: 'WebKitGTK Memory Corruption Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'WebKitGTK contains a memory corruption vulnerability which can allow an attacker to perform remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-18426',
      vendorProject: 'Meta Platforms',
      product: 'WhatsApp',
      vulnerabilityName: 'WhatsApp Cross-Site Scripting Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'A vulnerability in WhatsApp Desktop when paired with WhatsApp for iPhone allows cross-site scripting and local file reading.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1385',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Deployment Extensions Privilege Escalation Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows AppX Deployment Extensions improperly performs privilege management, resulting in access to system files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1130',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows AppX Deployment Service Privilege Escalation Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows AppX Deployment Service (AppXSVC) improperly handles hard links.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-5002',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'Adobe Flash Player have a stack-based buffer overflow vulnerability that could lead to remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8589',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-05-23',
      shortDescription:
        'A privilege escalation vulnerability exists when Windows improperly handles calls to Win32k.sys. An attacker who successfully exploited this vulnerability could run remote code in the security context of the local system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-8611',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows kernel fails to properly handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19953',
      vendorProject: 'QNAP',
      product: 'Network Attached Storage (NAS)',
      vulnerabilityName:
        'QNAP NAS File Station Cross-Site Scripting Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A cross-site scripting vulnerability affecting QNAP NAS File Station could allow remote attackers to inject malicious code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19949',
      vendorProject: 'QNAP',
      product: 'Network Attached Storage (NAS)',
      vulnerabilityName:
        'QNAP NAS File Station Command Injection Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A command injection vulnerability affecting QNAP NAS File Station could allow remote attackers to run commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19943',
      vendorProject: 'QNAP',
      product: 'Network Attached Storage (NAS)',
      vulnerabilityName:
        'QNAP NAS File Station Cross-Site Scripting Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A cross-site scripting vulnerability affecting QNAP NAS File Station could allow remote attackers to inject malicious code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0147',
      vendorProject: 'Microsoft',
      product: 'SMBv1 server',
      vulnerabilityName:
        'Microsoft Windows SMBv1 Information Disclosure Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'The SMBv1 server in Microsoft Windows allows remote attackers to obtain sensitive information from process memory via a crafted packet.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0022',
      vendorProject: 'Microsoft',
      product: 'XML Core Services',
      vulnerabilityName:
        'Microsoft XML Core Services Information Disclosure Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'Microsoft XML Core Services (MSXML) improperly handles objects in memory, allowing attackers to test for files on disk via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0005',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Graphics Device Interface (GDI) Privilege Escalation Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'The Graphics Device Interface (GDI) in Microsoft Windows allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0149',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability that allows remote attackers to execute code or cause a denial-of-service (DoS) via a crafted website.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-0210',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Privilege Escalation Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A privilege escalation vulnerability exists when Internet Explorer does not properly enforce cross-domain policies, which could allow an attacker to access information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-8291',
      vendorProject: 'Artifex',
      product: 'Ghostscript',
      vulnerabilityName: 'Artifex Ghostscript Type Confusion Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'Artifex Ghostscript allows -dSAFER bypass and remote command execution via .rsdparams type confusion with a "/OutputFile.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-8543',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Search Remote Code Execution Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'Microsoft Windows allows an attacker to take control of the affected system when Windows Search fails to handle objects in memory.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-18362',
      vendorProject: 'Kaseya',
      product: 'Virtual System/Server Administrator (VSA)',
      vulnerabilityName: 'Kaseya VSA SQL Injection Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'ConnectWise ManagedITSync integration for Kaseya VSA is vulnerable to unauthenticated remote commands that allow full direct access to the Kaseya VSA database.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0162',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Information Disclosure Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        "An information disclosure vulnerability exists when Internet Explorer does not properly handle JavaScript. The vulnerability could allow an attacker to detect specific files on the user's computer.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3351',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer and Edge',
      vulnerabilityName:
        'Microsoft Internet Explorer and Edge Information Disclosure Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        "An information disclosure vulnerability exists in the way that certain functions in Internet Explorer and Edge handle objects in memory. The vulnerability could allow an attacker to detect specific files on the user's computer.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4655',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS Information Disclosure Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'The Apple iOS kernel allows attackers to obtain sensitive information from memory via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4656',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS Memory Corruption Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A memory corruption vulnerability in Apple iOS kernel allows attackers to execute code in a privileged context or cause a denial-of-service (DoS) via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-4657',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS Webkit Memory Corruption Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'Apple iOS WebKit contains a memory corruption vulnerability that allows attackers to execute remote code or cause a denial-of-service (DoS) via a crafted web site. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-6366',
      vendorProject: 'Cisco',
      product: 'Adaptive Security Appliance (ASA)',
      vulnerabilityName:
        'Cisco Adaptive Security Appliance (ASA) SNMP Buffer Overflow Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A buffer overflow vulnerability in the Simple Network Management Protocol (SNMP) code of Cisco ASA software could allow an attacker to cause a reload of the affected system or to remotely execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-6367',
      vendorProject: 'Cisco',
      product: 'Adaptive Security Appliance (ASA)',
      vulnerabilityName:
        'Cisco Adaptive Security Appliance (ASA) CLI Remote Code Execution Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'A vulnerability in the command-line interface (CLI) parser of Cisco ASA software could allow an authenticated, local attacker to create a denial-of-service (DoS) condition or potentially execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3298',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Messaging API Information Disclosure Vulnerability',
      dateAdded: '2022-05-24',
      shortDescription:
        'An information disclosure vulnerability exists when the Microsoft Internet Messaging API improperly handles objects in memory. An attacker who successfully exploited this vulnerability could allow the attacker to test for the presence of files on disk.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-3010',
      vendorProject: 'Oracle',
      product: 'Solaris',
      vulnerabilityName: 'Oracle Solaris Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Oracle Solaris component: XScreenSaver contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3393',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Graphics Device Interface (GDI) Remote Code Execution Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'A remote code execution vulnerability exists due to the way the Windows GDI component handles objects in the memory. An attacker who successfully exploits this vulnerability could take control of the affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-7256',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Open Type Font Remote Code Execution Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'A remote code execution vulnerability exists when the Windows font library improperly handles specially crafted embedded fonts. An attacker who successfully exploits this vulnerability could take control of the affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-1010',
      vendorProject: 'Adobe',
      product: 'Flash Player and AIR',
      vulnerabilityName:
        'Adobe Flash Player and AIR Integer Overflow Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Integer overflow vulnerability in Adobe Flash Player and AIR allows attackers to execute code.',
      requiredAction:
        'The impacted products are end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0984',
      vendorProject: 'Adobe',
      product: 'Flash Player and AIR',
      vulnerabilityName:
        'Adobe Flash Player and AIR Use-After-Free Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Use-after-free vulnerability in Adobe Flash Player and Adobe AIR allows attackers to execute code.',
      requiredAction:
        'The impacted products are end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0034',
      vendorProject: 'Microsoft',
      product: 'Silverlight',
      vulnerabilityName:
        'Microsoft Silverlight Runtime Remote Code Execution Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Silverlight mishandles negative offsets during decoding, which allows attackers to execute remote code or cause a denial-of-service (DoS).',
      requiredAction:
        'The impacted products are end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-0310',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player ASLR Bypass Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Adobe Flash Player does not properly restrict discovery of memory addresses, which allows attackers to bypass the address space layout randomization (ASLR) protection mechanism.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-0016',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows TS WebProxy Directory Traversal Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Directory traversal vulnerability in the TS WebProxy (TSWbPrxy) component in Microsoft Windows allows remote attackers to escalate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-0071',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer ASLR Bypass Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Internet Explorer allows remote attackers to bypass the address space layout randomization (ASLR) protection mechanism via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2360',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Win32k.sys in the kernel-mode drivers in Microsoft Windows allows local users to gain privileges or cause denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2425',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability that allows remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1769',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Mount Manager Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'A privilege escalation vulnerability exists when the Windows Mount Manager component improperly processes symbolic links.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-4495',
      vendorProject: 'Mozilla',
      product: 'Firefox',
      vulnerabilityName:
        'Mozilla Firefox Security Feature Bypass Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Moxilla Firefox allows remote attackers to bypass the Same Origin Policy to read arbitrary files or gain privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-8651',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Integer Overflow Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Integer overflow in Adobe Flash Player allows attackers to execute code.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-6175',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'The kernel in Microsoft Windows contains a vulnerability that allows local users to gain privileges via a crafted application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-1671',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Remote Code Execution Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'A remote code execution vulnerability exists when components of Windows, .NET Framework, Office, Lync, and Silverlight fail to properly handle TrueType fonts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-4148',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Remote Code Execution Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'A remote code execution vulnerability exists when the Windows kernel-mode driver improperly handles TrueType fonts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-8439',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Dereferenced Pointer Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Adobe Flash Player has a vulnerability in the way it handles a dereferenced memory pointer which could lead to code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-4123',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Internet Explorer contains an unspecified vulnerability that allows remote attackers to gain privileges via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0546',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Sandbox Bypass Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Adobe Acrobat and Reader on Windows allow attackers to bypass a sandbox protection mechanism, and consequently execute native code in a privileged context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-2817',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Internet Explorer cotains an unspecified vulnerability that allows remote attackers to gain privileges via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-4077',
      vendorProject: 'Microsoft',
      product: 'Input Method Editor (IME) Japanese',
      vulnerabilityName:
        'Microsoft IME Japanese Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Input Method Editor (IME) Japanese is a keyboard with Japanese characters that can be enabled on Windows systems as it is included by default (with the default set as disabled). IME Japanese contains an unspecified vulnerability when IMJPDCT.EXE (IME for Japanese) is installed which allows attackers to bypass a sandbox and perform privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-3153',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'The futex_requeue function in kernel/futex.c in Linux kernel does not ensure that calls have two different futex addresses, which allows local users to gain privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-7331',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Information Disclosure Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'An information disclosure vulnerability exists in Internet Explorer which allows resources loaded into memory to be queried. This vulnerability could allow an attacker to detect anti-malware applications.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3993',
      vendorProject: 'IBM',
      product: 'InfoSphere BigInsights',
      vulnerabilityName:
        'IBM InfoSphere BigInsights Invalid Input Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Certain APIs within BigInsights can take invalid input that might allow attackers unauthorized access to read, write, modify, or delete data.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3896',
      vendorProject: 'Microsoft',
      product: 'Silverlight',
      vulnerabilityName:
        'Microsoft Silverlight Information Disclosure Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Silverlight does not properly validate pointers during access to Silverlight elements, which allows remote attackers to obtain sensitive information via a crafted Silverlight application.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2423',
      vendorProject: 'Oracle',
      product: 'Java Runtime Environment (JRE)',
      vulnerabilityName: 'Oracle JRE Unspecified Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Unspecified vulnerability in hotspot for Java Runtime Environment (JRE) allows remote attackers to affect integrity.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0431',
      vendorProject: 'Oracle',
      product: 'Java Runtime Environment (JRE)',
      vulnerabilityName: 'Oracle JRE Sandbox Bypass Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Unspecified vulnerability in the Java Runtime Environment (JRE) component in Oracle allows remote attackers to bypass the Java security sandbox.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0422',
      vendorProject: 'Oracle',
      product: 'Java Runtime Environment (JRE)',
      vulnerabilityName: 'Oracle JRE Remote Code Execution Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'A vulnerability in the way Java restricts the permissions of Java applets could allow an attacker to execute commands on a vulnerable system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-0074',
      vendorProject: 'Microsoft',
      product: 'Silverlight',
      vulnerabilityName:
        'Microsoft Silverlight Double Dereference Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Microsoft Silverlight does not properly validate pointers during HTML object rendering, which allows remote attackers to execute code via a crafted Silverlight application.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-1710',
      vendorProject: 'Oracle',
      product: 'Fusion Middleware',
      vulnerabilityName: 'Oracle Fusion Middleware Unspecified Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Unspecified vulnerability in the Oracle WebCenter Forms Recognition component in Oracle Fusion Middleware allows remote attackers to affect confidentiality, integrity, and availability via Unknown vectors related to Designer.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-1428',
      vendorProject: 'Red Hat',
      product: 'JBoss',
      vulnerabilityName: 'Red Hat JBoss Information Disclosure Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Unauthenticated access to the JBoss Application Server Web Console (/web-console) is blocked by default. However, it was found that this block was incomplete, and only blocked GET and POST HTTP verbs. A remote attacker could use this flaw to gain access to sensitive information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-0840',
      vendorProject: 'Oracle',
      product: 'Java Runtime Environment (JRE)',
      vulnerabilityName: 'Oracle JRE Unspecified Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        'Unspecified vulnerability in the Java Runtime Environment (JRE) in Java SE component allows remote attackers to affect confidentiality, integrity, and availability via Unknown vectors.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-0738',
      vendorProject: 'Red Hat',
      product: 'JBoss',
      vulnerabilityName: 'Red Hat JBoss Authentication Bypass Vulnerability',
      dateAdded: '2022-05-25',
      shortDescription:
        "The JMX-Console web application in JBossAs in Red Hat JBoss Enterprise Application Platform performs access control only for the GET and POST methods, which allows remote attackers to send requests to this application's GET handler by using a different method.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-15',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26134',
      vendorProject: 'Atlassian',
      product: 'Confluence Server/Data Center',
      vulnerabilityName:
        'Atlassian Confluence Server and Data Center Remote Code Execution Vulnerability',
      dateAdded: '2022-06-02',
      shortDescription:
        'Atlassian Confluence Server and Data Center contain a remote code execution vulnerability that allows for an unauthenticated attacker to perform remote code execution.',
      requiredAction:
        'Immediately block all internet traffic to and from affected products AND apply the update per vendor instructions [https://confluence.atlassian.com/doc/confluence-security-advisory-2022-06-02-1130377146.html] OR remove the affected products by the due date on the right. Note: Once the update is successfully deployed, agencies can reassess the internet blocking rules.',
      dueDate: '2022-06-06',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7195',
      vendorProject: 'QNAP',
      product: 'Photo Station',
      vulnerabilityName: 'QNAP Photo Station Path Traversal Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'QNAP devices running Photo Station contain an external control of file name or path vulnerability allowing remote attackers to access or modify system files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7194',
      vendorProject: 'QNAP',
      product: 'Photo Station',
      vulnerabilityName: 'QNAP Photo Station Path Traversal Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'QNAP devices running Photo Station contain an external control of file name or path vulnerability allowing remote attackers to access or modify system files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7193',
      vendorProject: 'QNAP',
      product: 'QTS',
      vulnerabilityName: 'QNAP QTS Improper Input Validation Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'QNAP QTS contains an improper input validation vulnerability allowing remote attackers to inject code on the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7192',
      vendorProject: 'QNAP',
      product: 'Photo Station',
      vulnerabilityName:
        'QNAP Photo Station Improper Access Control Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'QNAP NAS devices running Photo Station contain an improper access control vulnerability allowing remote attackers to gain unauthorized access to the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-5825',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains an out-of-bounds write vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-15271',
      vendorProject: 'Cisco',
      product: 'RV Series Routers',
      vulnerabilityName:
        'Cisco RV Series Routers Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'A deserialization of untrusted data vulnerability in the web-based management interface of certain Cisco Small Business RV Series Routers could allow an attacker to execute code with root privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-6065',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Integer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains an integer overflow vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-4990',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName: 'Adobe Acrobat and Reader Double Free Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Acrobat and Reader have a double free vulnerability that could lead to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-17480',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains out-of-bounds write vulnerability that allows a remote attacker to execute code inside a sandbox via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-17463',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName:
        'Google Chromium V8 Remote Code Execution Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains an unspecified vulnerability that allows a remote attacker to execute code inside a sandbox via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6862',
      vendorProject: 'NETGEAR',
      product: 'Multiple Devices',
      vulnerabilityName:
        'NETGEAR Multiple Devices Buffer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Multiple NETGEAR devices contain a buffer overflow vulnerability that allows for authentication bypass and remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-5070',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to execute code inside a sandbox via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-5030',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Memory Corruption Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains a memory corruption vulnerability that allows a remote attacker to execute code via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-5198',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName:
        'Google Chromium V8 Out-of-Bounds Memory Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains an out-of-bounds memory access vulnerability that allows a remote attacker to perform read/write operations, leading to code execution, via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-1646',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Out-of-Bounds Read Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Google Chromium V8 Engine contains an out-of-bounds read vulnerability that allows a remote attacker to cause a denial of service or possibly have another unspecified impact via crafted JavaScript code. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-1331',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Buffer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft Office contains a buffer overflow vulnerability that allows remote attackers to execute code via crafted PNG data in an Office document.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-5054',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Integer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Flash Player contains an integer overflow vulnerability that allows remote attackers to execute code via malformed arguments.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-4969',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Use-After-Free Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft Internet Explorer contains a use-after-free vulnerability that allows remote attackers to execute code via a crafted web site.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-1889',
      vendorProject: 'Microsoft',
      product: 'XML Core Services',
      vulnerabilityName:
        'Microsoft XML Core Services Memory Corruption Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft XML Core Services contains a memory corruption vulnerability which could allow for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0767',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName:
        'Adobe Flash Player Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Flash Player contains a XSS vulnerability that allows remote attackers to inject web script or HTML.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0754',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Memory Corruption Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Flash Player contains a memory corruption vulnerability that allows remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-0151',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Authenticode Signature Verification Remote Code Execution Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'The Authenticode Signature Verification function in Microsoft Windows (WinVerifyTrust) does not properly validate the digest of a signed portable executable (PE) file, which allows user-assisted remote attackers to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-2462',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Universal 3D Memory Corruption Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'The Universal 3D (U3D) component in Adobe Acrobat and Reader contains a memory corruption vulnerability which could allow remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-0609',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Unspecified Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Flash Player contains an unspecified vulnerability that allows remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-2883',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Stack-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Acrobat and Reader contain a stack-based buffer overflow vulnerability that allows remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-2572',
      vendorProject: 'Microsoft',
      product: 'PowerPoint',
      vulnerabilityName: 'Microsoft PowerPoint Buffer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft PowerPoint contains a buffer overflow vulnerability that alllows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-1297',
      vendorProject: 'Adobe',
      product: 'Flash Player',
      vulnerabilityName: 'Adobe Flash Player Memory Corruption Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Flash Player contains a memory corruption vulnerability that allows remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-4324',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Use-After-Free Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Use-after-free vulnerability in Adobe Acrobat and Reader allows remote attackers to execute code via a crafted PDF file.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-3953',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Universal 3D Remote Code Execution Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Acrobat and Reader contains an array boundary issue in Universal 3D (U3D) support that could lead to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-1862',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader, Flash Player',
      vulnerabilityName:
        'Adobe Acrobat and Reader, Flash Player Unspecified Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Acrobat and Reader and Adobe Flash Player allows remote attackers to execute code or cause denial-of-service (DoS).',
      requiredAction:
        'For Adobe Acrobat and Reader, apply updates per vendor instructions. For Adobe Flash Player, the impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-0563',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName: 'Microsoft Office Buffer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft Office contains a buffer overflow vulnerability that allows remote attackers to execute code via a Word document with a crafted tag containing an invalid length field.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2009-0557',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Object Record Corruption Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft Office contains an object record corruption vulnerability that allows remote attackers to execute code via a crafted Excel file with a malformed record object.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2008-0655',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName: 'Adobe Acrobat and Reader Unspecified Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Acrobat and Reader contains an unespecified vulnerability described as a design flaw which could allow a specially crafted file to be printed silently an arbitrary number of times.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2007-5659',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Buffer Overflow Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Adobe Acrobat and Reader contain a buffer overflow vulnerability that allows remote attackers to execute code via a PDF file with long arguments to unspecified JavaScript methods.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2006-2492',
      vendorProject: 'Microsoft',
      product: 'Word',
      vulnerabilityName:
        'Microsoft Word Malformed Object Pointer Vulnerability',
      dateAdded: '2022-06-08',
      shortDescription:
        'Microsoft Word and Microsoft Works Suites contain a malformed object pointer which allows attackers to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38163',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName: 'SAP NetWeaver Unrestricted File Upload Vulnerability',
      dateAdded: '2022-06-09',
      shortDescription:
        'SAP NetWeaver contains a vulnerability that allows unrestricted file upload.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-2386',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName: 'SAP NetWeaver SQL Injection Vulnerability',
      dateAdded: '2022-06-09',
      shortDescription:
        'SQL injection vulnerability in the UDDI server in SAP NetWeaver J2EE Engine 7.40 allows remote attackers to execute arbitrary SQL commands via unspecified vectors.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-2388',
      vendorProject: 'SAP',
      product: 'NetWeaver',
      vulnerabilityName: 'SAP NetWeaver Information Disclosure Vulnerability',
      dateAdded: '2022-06-09',
      shortDescription:
        'The Universal Worklist Configuration in SAP NetWeaver AS JAVA 7.4 allows remote attackers to obtain sensitive user information via a crafted HTTP request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-06-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-30190',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Support Diagnostic Tool (MSDT) Remote Code Execution Vulnerability',
      dateAdded: '2022-06-14',
      shortDescription:
        'A remote code execution vulnerability exists when MSDT is called using the URL protocol from a calling application such as Word. An attacker who successfully exploits this vulnerability can run code with the privileges of the calling application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-29499',
      vendorProject: 'Mitel',
      product: 'MiVoice Connect',
      vulnerabilityName: 'Mitel MiVoice Connect Data Validation Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'The Service Appliance component in Mitel MiVoice Connect allows remote code execution due to incorrect data validation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Known',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30533',
      vendorProject: 'Google',
      product: 'Chromium PopupBlocker',
      vulnerabilityName:
        'Google Chromium PopupBlocker Security Bypass Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'Google Chromium PopupBlocker contains an insufficient policy enforcement vulnerability that allows a remote attacker to bypass navigation restrictions via a crafted iframe. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-4034',
      vendorProject: 'Red Hat',
      product: 'Polkit',
      vulnerabilityName:
        'Red Hat Polkit Out-of-Bounds Read and Write Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'The Red Hat polkit pkexec utility contains an out-of-bounds read and write vulnerability that allows for privilege escalation with administrative rights.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30983',
      vendorProject: 'Apple',
      product: 'iOS and iPadOS',
      vulnerabilityName: 'Apple iOS and iPadOS Buffer Overflow Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'Apple iOS and iPadOS contain a buffer overflow vulnerability that could allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3837',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and watchOS contain a memory corruption vulnerability that could allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9907',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'Apple iOS, iPadOS, and tvOS contain a memory corruption vulnerability that could allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-8605',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Use-After-Free Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'A use-after-free vulnerability in Apple iOS, macOS, tvOS, and watchOS could allow a malicious application to execute code with system privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-4344',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2022-06-27',
      shortDescription:
        'Apple iOS, macOS, tvOS, and watchOS contain a memory corruption vulnerability which can allow for code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-07-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes: '',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26925',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName: 'Microsoft Windows LSA Spoofing Vulnerability',
      dateAdded: '2022-07-01',
      shortDescription:
        'Microsoft Windows Local Security Authority (LSA) contains a spoofing vulnerability where an attacker can coerce the domain controller to authenticate to the attacker using NTLM.',
      requiredAction:
        'Apply remediation actions outlined in CISA guidance [https://www.cisa.gov/guidance-applying-june-microsoft-patch].',
      dueDate: '2022-07-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'WARNING: This update is required on all Microsoft Windows endpoints but if deployed to domain controllers without additional configuration changes the update breaks PIV/CAC authentication. Read CISA implementation guidance carefully before deploying to domain controllers.',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22047',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Client Server Runtime Subsystem (CSRSS) Privilege Escalation Vulnerability',
      dateAdded: '2022-07-12',
      shortDescription:
        'Microsoft Windows CSRSS contains an unspecified vulnerability that allows for privilege escalation to SYSTEM privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-22047',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26138',
      vendorProject: 'Atlassian',
      product: 'Confluence',
      vulnerabilityName:
        'Atlassian Questions For Confluence App Hard-coded Credentials Vulnerability',
      dateAdded: '2022-07-29',
      shortDescription:
        'Atlassian Questions For Confluence App has hard-coded credentials, exposing the username and password in plaintext. A remote unauthenticated attacker can use these credentials to log into Confluence and access all content accessible to users in the confluence-users group.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://confluence.atlassian.com/doc/questions-for-confluence-security-advisory-2022-07-20-1142446709.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-27924',
      vendorProject: 'Zimbra',
      product: 'Collaboration (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration (ZCS) Command Injection Vulnerability',
      dateAdded: '2022-08-04',
      shortDescription:
        'Zimbra Collaboration (ZCS) allows an attacker to inject memcache commands into a targeted instance which causes an overwrite of arbitrary cached entries.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://wiki.zimbra.com/wiki/Zimbra_Releases/9.0.0/P24.1#Security_Fixes',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-34713',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Support Diagnostic Tool (MSDT) Remote Code Execution Vulnerability',
      dateAdded: '2022-08-09',
      shortDescription:
        'A remote code execution vulnerability exists when Microsoft Windows MSDT is called using the URL protocol from a calling application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-34713',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-30333',
      vendorProject: 'RARLAB',
      product: 'UnRAR',
      vulnerabilityName: 'RARLAB UnRAR Directory Traversal Vulnerability',
      dateAdded: '2022-08-09',
      shortDescription:
        'RARLAB UnRAR on Linux and UNIX contains a directory traversal vulnerability, allowing an attacker to write to files during an extract (unpack) operation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-08-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'Vulnerability updated with version 6.12. Accessing link will download update information: https://www.rarlab.com/rar/rarlinux-x32-612.tar.gz',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-27925',
      vendorProject: 'Zimbra',
      product: 'Collaboration (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration (ZCS) Arbitrary File Upload Vulnerability',
      dateAdded: '2022-08-11',
      shortDescription:
        'Zimbra Collaboration (ZCS) contains flaw in the mboximport functionality, allowing an authenticated attacker to upload arbitrary files to perform remote code execution. This vulnerability was chained with CVE-2022-37042 which allows for unauthenticated remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://blog.zimbra.com/2022/08/authentication-bypass-in-mailboximportservlet-vulnerability/',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-37042',
      vendorProject: 'Zimbra',
      product: 'Collaboration (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration (ZCS) Authentication Bypass Vulnerability',
      dateAdded: '2022-08-11',
      shortDescription:
        'Zimbra Collaboration (ZCS) contains an authentication bypass vulnerability in MailboxImportServlet. This vulnerability was chained with CVE-2022-27925 which allows for unauthenticated remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://blog.zimbra.com/2022/08/authentication-bypass-in-mailboximportservlet-vulnerability/',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22536',
      vendorProject: 'SAP',
      product: 'Multiple Products',
      vulnerabilityName:
        'SAP Multiple Products HTTP Request Smuggling Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        "SAP NetWeaver Application Server ABAP, SAP NetWeaver Application Server Java, ABAP Platform, SAP Content Server and SAP Web Dispatcher allow HTTP request smuggling. An unauthenticated attacker can prepend a victim's request with arbitrary data, allowing for function execution impersonating the victim or poisoning intermediary Web caches.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'SAP users must have an account in order to login and access the patch. https://accounts.sap.com/saml2/idp/sso',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-32894',
      vendorProject: 'Apple',
      product: 'iOS and macOS',
      vulnerabilityName:
        'Apple iOS and macOS Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        'Apple iOS and macOS contain an out-of-bounds write vulnerability that could allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-gb/HT213412, https://support.apple.com/en-gb/HT213413',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-32893',
      vendorProject: 'Apple',
      product: 'iOS and macOS',
      vulnerabilityName:
        'Apple iOS and macOS Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        'Apple iOS and macOS contain an out-of-bounds write vulnerability that could allow for remote code execution when processing malicious crafted web content.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-gb/HT213412, https://support.apple.com/en-gb/HT213413',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-2856',
      vendorProject: 'Google',
      product: 'Chromium Intents',
      vulnerabilityName:
        'Google Chromium Intents Insufficient Input Validation Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        'Google Chromium Intents contains an insufficient validation of untrusted input vulnerability that allows a remote attacker to browse to a malicious website via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2022/08/stable-channel-update-for-desktop_16.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26923',
      vendorProject: 'Microsoft',
      product: 'Active Directory',
      vulnerabilityName:
        'Microsoft Active Directory Domain Services Privilege Escalation Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        'An authenticated user could manipulate attributes on computer accounts they own or manage, and acquire a certificate from Active Directory Certificate Services that would allow for privilege escalation to SYSTEM.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2022-26923',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-21971',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Runtime Remote Code Execution Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        'Microsoft Windows Runtime contains an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21971',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-15944',
      vendorProject: 'Palo Alto Networks',
      product: 'PAN-OS',
      vulnerabilityName:
        'Palo Alto Networks PAN-OS Remote Code Execution Vulnerability',
      dateAdded: '2022-08-18',
      shortDescription:
        'Palo Alto Networks PAN-OS contains multiple, unspecified vulnerabilities which can allow for remote code execution when chained.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.paloaltonetworks.com/CVE-2017-15944',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-0028',
      vendorProject: 'Palo Alto Networks',
      product: 'PAN-OS',
      vulnerabilityName:
        'Palo Alto Networks PAN-OS Reflected Amplification Denial-of-Service Vulnerability',
      dateAdded: '2022-08-22',
      shortDescription:
        'A Palo Alto Networks PAN-OS URL filtering policy misconfiguration could allow a network-based attacker to conduct reflected and amplified TCP denial-of-service (RDoS) attacks.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.paloaltonetworks.com/CVE-2022-0028',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26352',
      vendorProject: 'dotCMS',
      product: 'dotCMS',
      vulnerabilityName: 'dotCMS Unrestricted Upload of File Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'dotCMS ContentResource API contains an unrestricted upload of file with a dangerous type vulnerability that allows for directory traversal, in which the file is saved outside of the intended storage location. Exploitation allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.dotcms.com/security/SI-62',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24706',
      vendorProject: 'Apache',
      product: 'CouchDB',
      vulnerabilityName:
        'Apache CouchDB Insecure Default Initialization of Resource Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'Apache CouchDB contains an insecure default initialization of resource vulnerability which can allow an attacker to escalate to administrative privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lists.apache.org/thread/w24wo0h8nlctfps65txvk0oc5hdcnv00',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24112',
      vendorProject: 'Apache',
      product: 'APISIX',
      vulnerabilityName: 'Apache APISIX Authentication Bypass Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'Apache APISIX contains an authentication bypass vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lists.apache.org/thread/lcdqywz8zy94mdysk7p3gfdgn51jmt94',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22963',
      vendorProject: 'VMware Tanzu',
      product: 'Spring Cloud',
      vulnerabilityName:
        'VMware Tanzu Spring Cloud Function Remote Code Execution Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        "When using routing functionality in VMware Tanzu's Spring Cloud Function, it is possible for a user to provide a specially crafted SpEL as a routing-expression that may result in remote code execution and access to local resources.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://tanzu.vmware.com/security/cve-2022-22963',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-2294',
      vendorProject: 'WebRTC',
      product: 'WebRTC',
      vulnerabilityName: 'WebRTC Heap Buffer Overflow Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'WebRTC, an open-source project providing web browsers with real-time communication, contains a heap buffer overflow vulnerability that allows an attacker to perform shellcode execution. This vulnerability impacts web browsers using WebRTC including but not limited to Google Chrome.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://groups.google.com/g/discuss-webrtc/c/5KBtZx2gvcQ',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-39226',
      vendorProject: 'Grafana Labs',
      product: 'Grafana',
      vulnerabilityName: 'Grafana Authentication Bypass Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'Grafana contains an authentication bypass vulnerability that allows authenticated and unauthenticated users to view and delete all snapshot data, potentially resulting in complete snapshot data loss.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://grafana.com/blog/2021/10/05/grafana-7.5.11-and-8.1.6-released-with-critical-security-fix/',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-38406',
      vendorProject: 'Delta Electronics',
      product: 'DOPSoft 2',
      vulnerabilityName:
        'Delta Electronics DOPSoft 2 Improper Input Validation Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'Delta Electronics DOPSoft 2 lacks proper validation of user-supplied data when parsing specific project files (improper input validation) resulting in an out-of-bounds write that allows for code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.cisa.gov/uscert/ics/advisories/icsa-21-252-02',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-31010',
      vendorProject: 'Apple',
      product: 'iOS, macOS, watchOS',
      vulnerabilityName:
        'Apple iOS, macOS, watchOS Sandbox Bypass Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'In affected versions of Apple iOS, macOS, and watchOS, a sandboxed process may be able to circumvent sandbox restrictions.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT212804, https://support.apple.com/en-us/HT212805, https://support.apple.com/en-us/HT212806, https://support.apple.com/en-us/HT212807, https://support.apple.com/en-us/HT212824',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-36193',
      vendorProject: 'PEAR',
      product: 'Archive_Tar',
      vulnerabilityName:
        'PEAR Archive_Tar Improper Link Resolution Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'PEAR Archive_Tar Tar.php allows write operations with directory traversal due to inadequate checking of symbolic links. PEAR stands for PHP Extension and Application Repository and it is an open-source framework and distribution system for reusable PHP components with known usage in third-party products such as Drupal Core and Red Hat Linux.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://github.com/pear/Archive_Tar/commit/cde460582ff389404b5b3ccb59374e9b389de916, https://www.drupal.org/sa-core-2021-001, https://access.redhat.com/security/cve/cve-2020-36193',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-28949',
      vendorProject: 'PEAR',
      product: 'Archive_Tar',
      vulnerabilityName:
        'PEAR Archive_Tar Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2022-08-25',
      shortDescription:
        'PEAR Archive_Tar allows an unserialization attack because phar: is blocked but PHAR: is not blocked. PEAR stands for PHP Extension and Application Repository and it is an open-source framework and distribution system for reusable PHP components with known usage in third-party products such as Drupal Core and Red Hat Linux.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://pear.php.net/bugs/bug.php?id=27002, https://www.drupal.org/sa-core-2020-013, https://access.redhat.com/security/cve/cve-2020-28949',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-3075',
      vendorProject: 'Google',
      product: 'Chromium Mojo',
      vulnerabilityName:
        'Google Chromium Mojo Insufficient Data Validation Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Google Chromium Mojo contains an insufficient data validation vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2022/09/stable-channel-update-for-desktop.html, https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-3075',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-27593',
      vendorProject: 'QNAP',
      product: 'Photo Station',
      vulnerabilityName:
        'QNAP Photo Station Externally Controlled Reference Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Certain QNAP NAS running Photo Station with internet exposure contain an externally controlled reference to a resource vulnerability which can allow an attacker to modify system files. This vulnerability was observed being utilized in a Deadbolt ransomware campaign.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.qnap.com/en/security-advisory/qsa-22-24',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26258',
      vendorProject: 'D-Link',
      product: 'DIR-820L',
      vulnerabilityName: 'D-Link DIR-820L Remote Code Execution Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'D-Link DIR-820L contains an unspecified vulnerability in Device Name parameter in /lan.asp which allows for remote code execution.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportannouncement.us.dlink.com/announcement/publication.aspx?name=SAP10295',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-9934',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS Input Validation Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Apple iOS, iPadOS, and macOS contain an unspecified vulnerability involving input validation which can allow a local attacker to view sensitive user information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT211288, https://support.apple.com/en-us/HT211289',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-7445',
      vendorProject: 'MikroTik',
      product: 'RouterOS',
      vulnerabilityName:
        'MikroTik RouterOS Stack-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'In MikroTik RouterOS, a stack-based buffer overflow occurs when processing NetBIOS session request messages. Remote attackers with access to the service can exploit this vulnerability and gain code execution on the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.coresecurity.com/core-labs/advisories/mikrotik-routeros-smb-buffer-overflow#vendor_update, https://mikrotik.com/download',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-6530',
      vendorProject: 'D-Link',
      product: 'Multiple Routers',
      vulnerabilityName:
        'D-Link Multiple Routers OS Command Injection Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Multiple D-Link routers contain an unspecified vulnerability that allows for execution of OS commands.',
      requiredAction:
        'The vendor D-Link published an advisory stating the fix under CVE-2018-20114 properly patches KEV entry CVE-2018-6530. If the device is still supported, apply updates per vendor instructions. If the affected device has since entered its end-of-life, it should be disconnected if still in use.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://supportannouncement.us.dlink.com/announcement/publication.aspx?name=SAP10105',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-2628',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName: 'Oracle WebLogic Server Unspecified Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Oracle WebLogic Server contains an unspecified vulnerability which can allow an unauthenticated attacker with T3 network access to compromise the server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.oracle.com/security-alerts/cpuapr2018.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-13374',
      vendorProject: 'Fortinet',
      product: 'FortiOS and FortiADC',
      vulnerabilityName:
        'Fortinet FortiOS and FortiADC Improper Access Control Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Fortinet FortiOS and FortiADC contain an improper access control vulnerability that allows attackers to obtain the LDAP server login credentials configured in FortiGate by pointing a LDAP server connectivity test request to a rogue LDAP server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.fortiguard.com/psirt/FG-IR-18-157',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-5521',
      vendorProject: 'NETGEAR',
      product: 'Multiple Devices',
      vulnerabilityName:
        'NETGEAR Multiple Devices Exposure of Sensitive Information Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'Multiple NETGEAR devices are prone to admin password disclosure via simple crafted requests to the web management server.',
      requiredAction:
        'Apply updates per vendor instructions. If the affected device has since entered end-of-life, it should be disconnected if still in use.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://kb.netgear.com/30632/Web-GUI-Password-Recovery-and-Exposure-Security-Vulnerability',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-4723',
      vendorProject: 'D-Link',
      product: 'DIR-300 Router',
      vulnerabilityName:
        'D-Link DIR-300 Router Cleartext Storage of a Password Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'The D-Link DIR-300 router stores cleartext passwords, which allows context-dependent attackers to obtain sensitive information.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.dlink.com/uk/en/support/product/dir-300-wireless-g-router',
      cwes: [],
    },
    {
      cveID: 'CVE-2011-1823',
      vendorProject: 'Android',
      product: 'Android OS',
      vulnerabilityName: 'Android OS Privilege Escalation Vulnerability',
      dateAdded: '2022-09-08',
      shortDescription:
        'The vold volume manager daemon in Android kernel trusts messages from a PF_NETLINK socket, which allows an attacker to execute code and gain root privileges. This vulnerability is associated with GingerBreak and Exploit.AndroidOS.Lotoor.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-09-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://android.googlesource.com/platform/system/vold/+/c51920c82463b240e2be0430849837d6fdc5352e',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-37969',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Common Log File System (CLFS) Driver Privilege Escalation Vulnerability',
      dateAdded: '2022-09-14',
      shortDescription:
        'Microsoft Windows Common Log File System (CLFS) driver contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2022-37969',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-32917',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS Remote Code Execution Vulnerability',
      dateAdded: '2022-09-14',
      shortDescription:
        'Apple kernel, which is included in iOS, iPadOS, and macOS, contains an unspecified vulnerability where an application may be able to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213445, https://support.apple.com/en-us/HT213444',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-40139',
      vendorProject: 'Trend Micro',
      product: 'Apex One and Apex One as a Service',
      vulnerabilityName:
        'Trend Micro Apex One and Apex One as a Service Improper Validation Vulnerability',
      dateAdded: '2022-09-15',
      shortDescription:
        'Trend Micro Apex One and Apex One as a Service contain an improper validation of rollback mechanism components that could lead to remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://success.trendmicro.com/dcx/s/solution/000291528?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-6282',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Improper Input Validation Vulnerability',
      dateAdded: '2022-09-15',
      shortDescription:
        'The get_user and put_user API functions of the Linux kernel fail to validate the target address when being used on ARM v6k/v7 platforms. This allows an application to read and write kernel memory which could lead to privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8404663f81d212918ff85f493649a7991209fa04',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2597',
      vendorProject: 'Code Aurora',
      product: 'ACDB Audio Driver',
      vulnerabilityName:
        'Code Aurora ACDB Audio Driver Stack-based Buffer Overflow Vulnerability',
      dateAdded: '2022-09-15',
      shortDescription:
        'The Code Aurora audio calibration database (acdb) audio driver contains a stack-based buffer overflow vulnerability that allows for privilege escalation. Code Aurora is used in third-party products such as Qualcomm and Android.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://web.archive.org/web/20161226013354/https:/www.codeaurora.org/news/security-advisories/stack-based-buffer-overflow-acdb-audio-driver-cve-2013-2597',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2596',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Integer Overflow Vulnerability',
      dateAdded: '2022-09-15',
      shortDescription:
        'Linux kernel fb_mmap function in drivers/video/fbmem.c contains an integer overflow vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fc9bbca8f650e5f738af8806317c0a041a48ae4a',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-2094',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-09-15',
      shortDescription:
        'Linux kernel fails to check all 64 bits of attr.config passed by user space, resulting to out-of-bounds access of the perf_swevent_enabled array in sw_perf_event_destroy(). Explotation allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8176cced706b5e5d15887584150764894e94e02f',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-2568',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Remote Code Execution Vulnerability',
      dateAdded: '2022-09-15',
      shortDescription:
        'Microsoft Windows incorrectly parses shortcuts in such a way that malicious code may be executed when the operating system displays the icon of a malicious shortcut file. An attacker who successfully exploited this vulnerability could execute code as the logged-on user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://docs.microsoft.com/en-us/security-updates/securitybulletins/2010/ms10-046',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-35405',
      vendorProject: 'Zoho',
      product: 'ManageEngine',
      vulnerabilityName:
        'Zoho ManageEngine Multiple Products Remote Code Execution Vulnerability',
      dateAdded: '2022-09-22',
      shortDescription:
        'Zoho ManageEngine PAM360, Password Manager Pro, and Access Manager Plus contain an unspecified vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.manageengine.com/products/passwordmanagerpro/advisory/cve-2022-35405.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-3236',
      vendorProject: 'Sophos',
      product: 'Firewall',
      vulnerabilityName: 'Sophos Firewall Code Injection Vulnerability',
      dateAdded: '2022-09-23',
      shortDescription:
        'A code injection vulnerability in the User Portal and Webadmin of Sophos Firewall allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.sophos.com/en-us/security-advisories/sophos-sa-20220923-sfos-rce',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41082',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Remote Code Execution Vulnerability',
      dateAdded: '2022-09-30',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for authenticated remote code execution. Dubbed "ProxyNotShell," this vulnerability is chainable with CVE-2022-41040 which allows for the remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-21',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc-blog.microsoft.com/2022/09/29/customer-guidance-for-reported-zero-day-vulnerabilities-in-microsoft-exchange-server/',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41040',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Server-Side Request Forgery Vulnerability',
      dateAdded: '2022-09-30',
      shortDescription:
        'Microsoft Exchange Server allows for server-side request forgery. Dubbed "ProxyNotShell," this vulnerability is chainable with CVE-2022-41082 which allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-21',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc-blog.microsoft.com/2022/09/29/customer-guidance-for-reported-zero-day-vulnerabilities-in-microsoft-exchange-server/',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-36804',
      vendorProject: 'Atlassian',
      product: 'Bitbucket Server and Data Center',
      vulnerabilityName:
        'Atlassian Bitbucket Server and Data Center Command Injection Vulnerability',
      dateAdded: '2022-09-30',
      shortDescription:
        'Multiple API endpoints of Atlassian Bitbucket Server and Data Center contain a command injection vulnerability where an attacker with access to a public Bitbucket repository, or with read permissions to a private one, can execute code by sending a malicious HTTP request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-10-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://jira.atlassian.com/browse/BSERV-13438',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-40684',
      vendorProject: 'Fortinet',
      product: 'Multiple Products',
      vulnerabilityName:
        'Fortinet Multiple Products Authentication Bypass Vulnerability',
      dateAdded: '2022-10-11',
      shortDescription:
        'Fortinet FortiOS, FortiProxy, and FortiSwitchManager contain an authentication bypass vulnerability that could allow an unauthenticated attacker to perform operations on the administrative interface via specially crafted HTTP or HTTPS requests.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-01',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.fortiguard.com/psirt/FG-IR-22-377',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41033',
      vendorProject: 'Microsoft',
      product: 'Windows COM+ Event System Service',
      vulnerabilityName:
        'Microsoft Windows COM+ Event System Service Privilege Escalation Vulnerability',
      dateAdded: '2022-10-11',
      shortDescription:
        'Microsoft Windows COM+ Event System Service contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2022-41033',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41352',
      vendorProject: 'Zimbra',
      product: 'Collaboration (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration (ZCS) Arbitrary File Upload Vulnerability',
      dateAdded: '2022-10-20',
      shortDescription:
        'Zimbra Collaboration (ZCS) allows an attacker to upload arbitrary files using cpio package to gain incorrect access to any other user accounts.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://wiki.zimbra.com/wiki/Security_Center',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-3493',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Privilege Escalation Vulnerability',
      dateAdded: '2022-10-20',
      shortDescription:
        'The overlayfs stacking file system in Linux kernel does not properly validate the application of file capabilities against user namespaces, which could lead to privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7c03e2cda4a584cadc398e8f6641ca9988a39d52',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3433',
      vendorProject: 'Cisco',
      product: 'AnyConnect Secure',
      vulnerabilityName:
        'Cisco AnyConnect Secure Mobility Client for Windows DLL Hijacking Vulnerability',
      dateAdded: '2022-10-24',
      shortDescription:
        'Cisco AnyConnect Secure Mobility Client for Windows interprocess communication (IPC) channel allows for insufficient validation of resources that are loaded by the application at run time. An attacker with valid credentials on Windows could execute code on the affected machine with SYSTEM privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-anyconnect-dll-F26WwJW',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3153',
      vendorProject: 'Cisco',
      product: 'AnyConnect Secure',
      vulnerabilityName:
        'Cisco AnyConnect Secure Mobility Client for Windows Uncontrolled Search Path Vulnerability',
      dateAdded: '2022-10-24',
      shortDescription:
        'Cisco AnyConnect Secure Mobility Client for Windows allows for incorrect handling of directory paths. An attacker with valid credentials on Windows would be able to copy malicious files to arbitrary locations with system level privileges. This could include DLL pre-loading, DLL hijacking, and other related attacks.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ac-win-path-traverse-qO4HWBsj',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19323',
      vendorProject: 'GIGABYTE',
      product: 'Multiple Products',
      vulnerabilityName:
        'GIGABYTE Multiple Products Privilege Escalation Vulnerability',
      dateAdded: '2022-10-24',
      shortDescription:
        'The GPCIDrv and GDrv low-level drivers in GIGABYTE App Center, AORUS Graphics Engine, XTREME Gaming Engine, and OC GURU expose functionality to read and write arbitrary physical memory. This could be leveraged by a local attacker to elevate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-14',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.gigabyte.com/Support/Security/1801',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19322',
      vendorProject: 'GIGABYTE',
      product: 'Multiple Products',
      vulnerabilityName:
        'GIGABYTE Multiple Products Code Execution Vulnerability',
      dateAdded: '2022-10-24',
      shortDescription:
        'The GPCIDrv and GDrv low-level drivers in GIGABYTE App Center, AORUS Graphics Engine, XTREME Gaming Engine, and OC GURU II expose functionality to read/write data from/to IO ports. This could be leveraged in a number of ways to ultimately run code with elevated privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-14',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.gigabyte.com/Support/Security/1801',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19321',
      vendorProject: 'GIGABYTE',
      product: 'Multiple Products',
      vulnerabilityName:
        'GIGABYTE Multiple Products Privilege Escalation Vulnerability',
      dateAdded: '2022-10-24',
      shortDescription:
        'The GPCIDrv and GDrv low-level drivers in GIGABYTE App Center, AORUS Graphics Engine, XTREME Gaming Engine, and OC GURU II expose functionality to read and write arbitrary physical memory. This could be leveraged by a local attacker to elevate privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-14',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.gigabyte.com/Support/Security/1801',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-19320',
      vendorProject: 'GIGABYTE',
      product: 'Multiple Products',
      vulnerabilityName: 'GIGABYTE Multiple Products Unspecified Vulnerability',
      dateAdded: '2022-10-24',
      shortDescription:
        'The GDrv low-level driver in GIGABYTE App Center, AORUS Graphics Engine, XTREME Gaming Engine, and OC GURU II exposes ring0 memcpy-like functionality that could allow a local attacker to take complete control of the affected system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-14',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.gigabyte.com/Support/Security/1801',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-42827',
      vendorProject: 'Apple',
      product: 'iOS and iPadOS',
      vulnerabilityName:
        'Apple iOS and iPadOS Out-of-Bounds Write Vulnerability',
      dateAdded: '2022-10-25',
      shortDescription:
        'Apple iOS and iPadOS kernel contain an out-of-bounds write vulnerability which can allow an application to perform code execution with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://support.apple.com/en-us/HT213489',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-3723',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2022-10-28',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2022/10/stable-channel-update-for-desktop_27.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41091',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Mark of the Web (MOTW) Security Feature Bypass Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Microsoft Windows Mark of the Web (MOTW) contains a security feature bypass vulnerability resulting in a limited loss of integrity and availability of security features.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-41091',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41073',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Print Spooler Privilege Escalation Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Microsoft Windows Print Spooler contains an unspecified vulnerability that allows an attacker to gain SYSTEM-level privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-09',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-41073',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41125',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows CNG Key Isolation Service Privilege Escalation Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Microsoft Windows Cryptographic Next Generation (CNG) Key Isolation Service contains an unspecified vulnerability that allows an attacker to gain SYSTEM-level privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-41125',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41128',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Scripting Languages Remote Code Execution Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Microsoft Windows contains an unspecified vulnerability in the JScript9 scripting language which allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-41128',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25337',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Improper Access Control Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Samsung mobile devices contain an improper access control vulnerability in clipboard service which allows untrusted applications to read or write arbitrary files. This vulnerability was chained with CVE-2021-25369 and CVE-2021-25370.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.samsungmobile.com/securityUpdate.smsb',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25369',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Improper Access Control Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Samsung mobile devices using Mali GPU contains an improper access control vulnerability in sec_log file. Exploitation of the vulnerability exposes sensitive kernel information to the userspace. This vulnerability was chained with CVE-2021-25337 and CVE-2021-25370.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.samsungmobile.com/securityUpdate.smsb',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25370',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Memory Corruption Vulnerability',
      dateAdded: '2022-11-08',
      shortDescription:
        'Samsung mobile devices using Mali GPU contain an incorrect implementation handling file descriptor in dpu driver. This incorrect implementation results in memory corruption, leading to kernel panic. This vulnerability was chained with CVE-2021-25337 and CVE-2021-25369.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-11-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.samsungmobile.com/securityUpdate.smsb',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41049',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Mark of the Web (MOTW) Security Feature Bypass Vulnerability',
      dateAdded: '2022-11-14',
      shortDescription:
        'Microsoft Windows Mark of the Web (MOTW) contains a security feature bypass vulnerability resulting in a limited loss of integrity and availability of security features.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2022-41049',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-35587',
      vendorProject: 'Oracle',
      product: 'Fusion Middleware',
      vulnerabilityName: 'Oracle Fusion Middleware Unspecified Vulnerability',
      dateAdded: '2022-11-28',
      shortDescription:
        'Oracle Fusion Middleware Access Manager allows an unauthenticated attacker with network access via HTTP to takeover the Access Manager product.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.oracle.com/security-alerts/cpujan2022.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-4135',
      vendorProject: 'Google',
      product: 'Chromium GPU',
      vulnerabilityName:
        'Google Chromium GPU Heap Buffer Overflow Vulnerability',
      dateAdded: '2022-11-28',
      shortDescription:
        'Google Chromium GPU contains a heap buffer overflow vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2022/11/stable-channel-update-for-desktop_24.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-4262',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2022-12-05',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2022-12-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2022/12/stable-channel-update-for-desktop.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-42475',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName:
        'Fortinet FortiOS Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2022-12-13',
      shortDescription:
        'Multiple versions of Fortinet FortiOS SSL-VPN contain a heap-based buffer overflow vulnerability which can allow an unauthenticated, remote attacker to execute arbitrary code or commands via specifically crafted requests.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.fortiguard.com/psirt/FG-IR-22-398',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-44698',
      vendorProject: 'Microsoft',
      product: 'Defender',
      vulnerabilityName:
        'Microsoft Defender SmartScreen Security Feature Bypass Vulnerability',
      dateAdded: '2022-12-13',
      shortDescription:
        'Microsoft Defender SmartScreen contains a security feature bypass vulnerability that could allow an attacker to evade Mark of the Web (MOTW) defenses via a specially crafted malicious file.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-03',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-44698',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-27518',
      vendorProject: 'Citrix',
      product: 'Application Delivery Controller (ADC) and Gateway',
      vulnerabilityName:
        'Citrix Application Delivery Controller (ADC) and Gateway Authentication Bypass Vulnerability',
      dateAdded: '2022-12-13',
      shortDescription:
        'Citrix Application Delivery Controller (ADC) and Gateway, when configured with SAML SP or IdP configuration, contain an authentication bypass vulnerability that allows an attacker to execute code as administrator.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.citrix.com/blogs/2022/12/13/critical-security-update-now-available-for-citrix-adc-citrix-gateway/',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26500',
      vendorProject: 'Veeam',
      product: 'Backup & Replication',
      vulnerabilityName:
        'Veeam Backup & Replication Remote Code Execution Vulnerability',
      dateAdded: '2022-12-13',
      shortDescription:
        'The Veeam Distribution Service in the Backup & Replication application allows unauthenticated users to access internal API functions. A remote attacker can send input to the internal API which may lead to uploading and executing of malicious code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-03',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.veeam.com/kb4288',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-26501',
      vendorProject: 'Veeam',
      product: 'Backup & Replication',
      vulnerabilityName:
        'Veeam Backup & Replication Remote Code Execution Vulnerability',
      dateAdded: '2022-12-13',
      shortDescription:
        'The Veeam Distribution Service in the Backup & Replication application allows unauthenticated users to access internal API functions. A remote attacker can send input to the internal API which may lead to uploading and executing of malicious code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-03',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.veeam.com/kb4288',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-42856',
      vendorProject: 'Apple',
      product: 'iOS',
      vulnerabilityName: 'Apple iOS Type Confusion Vulnerability',
      dateAdded: '2022-12-14',
      shortDescription:
        'Apple iOS contains a type confusion vulnerability when processing maliciously crafted web content leading to code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://support.apple.com/en-us/HT213516',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-5430',
      vendorProject: 'TIBCO',
      product: 'JasperReports',
      vulnerabilityName:
        'TIBCO JasperReports Server Information Disclosure Vulnerability',
      dateAdded: '2022-12-29',
      shortDescription:
        'TIBCO JasperReports Server contain a vulnerability which may allow any authenticated user read-only access to the contents of the web application, including key configuration files.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.tibco.com/support/advisories/2018/04/tibco-security-advisory-april-17-2018-tibco-jasperreports-2018-5430',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-18809',
      vendorProject: 'TIBCO',
      product: 'JasperReports',
      vulnerabilityName:
        'TIBCO JasperReports Library Directory Traversal Vulnerability',
      dateAdded: '2022-12-29',
      shortDescription:
        'TIBCO JasperReports Library contains a directory-traversal vulnerability that may allow web server users to access contents of the host system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.tibco.com/support/advisories/2019/03/tibco-security-advisory-march-6-2019-tibco-jasperreports-library-2018-18809',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41080',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Privilege Escalation Vulnerability',
      dateAdded: '2023-01-10',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for privilege escalation. This vulnerability is chainable with CVE-2022-41082, which allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-31',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2022-41080',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21674',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Advanced Local Procedure Call (ALPC) Privilege Escalation Vulnerability',
      dateAdded: '2023-01-10',
      shortDescription:
        'Microsoft Windows Advanced Local Procedure Call (ALPC) contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-01-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-21674',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-44877',
      vendorProject: 'CWP',
      product: 'Control Web Panel',
      vulnerabilityName:
        'CWP Control Web Panel OS Command Injection Vulnerability',
      dateAdded: '2023-01-17',
      shortDescription:
        'CWP Control Web Panel (formerly CentOS Web Panel) contains an OS command injection vulnerability that allows remote attackers to execute commands via shell metacharacters in the login parameter.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-02-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://control-webpanel.com/changelog#1669855527714-450fb335-6194',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-47966',
      vendorProject: 'Zoho',
      product: 'ManageEngine',
      vulnerabilityName:
        'Zoho ManageEngine Multiple Products Remote Code Execution Vulnerability',
      dateAdded: '2023-01-23',
      shortDescription:
        'Multiple Zoho ManageEngine products contain an unauthenticated remote code execution vulnerability due to the usage of an outdated third-party dependency, Apache Santuario.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-02-13',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.manageengine.com/security/advisory/CVE/cve-2022-47966.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-11357',
      vendorProject: 'Telerik',
      product: 'User Interface (UI) for ASP.NET AJAX',
      vulnerabilityName:
        'Telerik UI for ASP.NET AJAX Insecure Direct Object Reference Vulnerability',
      dateAdded: '2023-01-26',
      shortDescription:
        'Telerik UI for ASP.NET AJAX contains an insecure direct object reference vulnerability in RadAsyncUpload that can result in file uploads in a limited location and/or remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-02-16',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/asyncupload-insecure-direct-object-reference',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-21587',
      vendorProject: 'Oracle',
      product: 'E-Business Suite',
      vulnerabilityName: 'Oracle E-Business Suite Unspecified Vulnerability',
      dateAdded: '2023-02-02',
      shortDescription:
        'Oracle E-Business Suite contains an unspecified vulnerability that allows an unauthenticated attacker with network access via HTTP to compromise Oracle Web Applications Desktop Integrator.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-02-23',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.oracle.com/security-alerts/cpuoct2022.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-22952',
      vendorProject: 'SugarCRM',
      product: 'Multiple Products',
      vulnerabilityName:
        'Multiple SugarCRM Products Remote Code Execution Vulnerability',
      dateAdded: '2023-02-02',
      shortDescription:
        'Multiple SugarCRM products contain a remote code execution vulnerability in the EmailTemplates. Using a specially crafted request, custom PHP code can be injected through the EmailTemplates.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-02-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.sugarcrm.com/Resources/Security/sugarcrm-sa-2023-001/',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-2291',
      vendorProject: 'Intel',
      product: 'Ethernet Diagnostics Driver for Windows',
      vulnerabilityName:
        'Intel Ethernet Diagnostics Driver for Windows Denial-of-Service Vulnerability',
      dateAdded: '2023-02-10',
      shortDescription:
        'Intel ethernet diagnostics driver for Windows IQVW32.sys and IQVW64.sys contain an unspecified vulnerability that allows for a denial-of-service (DoS).',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.intel.com/content/www/us/en/security-center/advisory/intel-sa-00051.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24990',
      vendorProject: 'TerraMaster',
      product: 'TerraMaster OS',
      vulnerabilityName:
        'TerraMaster OS Remote Command Execution Vulnerability',
      dateAdded: '2023-02-10',
      shortDescription:
        'TerraMaster OS contains a remote command execution vulnerability that allows an unauthenticated user to execute commands on the target endpoint.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-03',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://forum.terra-master.com/en/viewtopic.php?t=3030',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-0669',
      vendorProject: 'Fortra',
      product: 'GoAnywhere MFT',
      vulnerabilityName:
        'Fortra GoAnywhere MFT Remote Code Execution Vulnerability',
      dateAdded: '2023-02-10',
      shortDescription:
        'Fortra (formerly, HelpSystems) GoAnywhere MFT contains a pre-authentication remote code execution vulnerability in the License Response Servlet due to deserializing an attacker-controlled object.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-03',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'This CVE has a CISA AA located here: https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a. Please see the AA for associated IOCs. Additional information is available at: https://my.goanywhere.com/webclient/DownloadProductFiles.xhtml. Fortra users must have an account in order to login and access the patch.',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21715',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Publisher Security Feature Bypass Vulnerability',
      dateAdded: '2023-02-14',
      shortDescription:
        'Microsoft Office Publisher contains a security feature bypass vulnerability that allows for a local, authenticated attack on a targeted system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-21715',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-23376',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Common Log File System (CLFS) Driver Privilege Escalation Vulnerability',
      dateAdded: '2023-02-14',
      shortDescription:
        'Microsoft Windows Common Log File System (CLFS) driver contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-23376',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-23529',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Type Confusion Vulnerability',
      dateAdded: '2023-02-14',
      shortDescription:
        'Apple iOS, MacOS, Safari and iPadOS WebKit contain a type confusion vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213635, https://support.apple.com/en-us/HT213633, https://support.apple.com/en-us/HT213638',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21823',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Graphic Component Privilege Escalation Vulnerability',
      dateAdded: '2023-02-14',
      shortDescription:
        'Microsoft Windows Graphic Component contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-21823',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-46169',
      vendorProject: 'Cacti',
      product: 'Cacti',
      vulnerabilityName: 'Cacti Command Injection Vulnerability',
      dateAdded: '2023-02-16',
      shortDescription:
        'Cacti contains a command injection vulnerability that allows an unauthenticated user to execute code.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://github.com/Cacti/cacti/security/advisories/GHSA-6p93-p743-35gf',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-47986',
      vendorProject: 'IBM',
      product: 'Aspera Faspex',
      vulnerabilityName: 'IBM Aspera Faspex Code Execution Vulnerability',
      dateAdded: '2023-02-21',
      shortDescription:
        'IBM Aspera Faspex could allow a remote attacker to execute code on the system, caused by a YAML deserialization flaw.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://exchange.xforce.ibmcloud.com/vulnerabilities/243512?_ga=2.189195179.1800390251.1676559338-700333034.1676325890',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41223',
      vendorProject: 'Mitel',
      product: 'MiVoice Connect',
      vulnerabilityName: 'Mitel MiVoice Connect Code Injection Vulnerability',
      dateAdded: '2023-02-21',
      shortDescription:
        'The Director component in Mitel MiVoice Connect allows an authenticated attacker with internal network access to execute code within the context of the application.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.mitel.com/support/security-advisories/mitel-product-security-advisory-22-0008',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-40765',
      vendorProject: 'Mitel',
      product: 'MiVoice Connect',
      vulnerabilityName:
        'Mitel MiVoice Connect Command Injection Vulnerability',
      dateAdded: '2023-02-21',
      shortDescription:
        'The Mitel Edge Gateway component of MiVoice Connect allows an authenticated attacker with internal network access to execute commands within the context of the system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.mitel.com/support/security-advisories/mitel-product-security-advisory-22-0007',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-36537',
      vendorProject: 'ZK Framework',
      product: 'AuUploader',
      vulnerabilityName: 'ZK Framework AuUploader Unspecified Vulnerability',
      dateAdded: '2023-02-27',
      shortDescription:
        'ZK Framework AuUploader servlets contain an unspecified vulnerability that could allow an attacker to retrieve the content of a file located in the web context. The ZK Framework is an open-source Java framework. This vulnerability can impact multiple products, including but not limited to ConnectWise R1Soft Server Backup Manager.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-20',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://tracker.zkoss.org/browse/ZK-5150',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-28810',
      vendorProject: 'Zoho',
      product: 'ManageEngine',
      vulnerabilityName:
        'Zoho ManageEngine ADSelfService Plus Remote Code Execution Vulnerability',
      dateAdded: '2023-03-07',
      shortDescription:
        'Zoho ManageEngine ADSelfService Plus contains an unspecified vulnerability allowing for remote code execution when performing a password change or reset.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.manageengine.com/products/self-service-password/advisory/CVE-2022-28810.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-33891',
      vendorProject: 'Apache',
      product: 'Spark',
      vulnerabilityName: 'Apache Spark Command Injection Vulnerability',
      dateAdded: '2023-03-07',
      shortDescription:
        'Apache Spark contains a command injection vulnerability via Spark User Interface (UI) when Access Control Lists (ACLs) are enabled.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lists.apache.org/thread/p847l3kopoo5bjtmxrcwk21xp6tjxqlc',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-35914',
      vendorProject: 'Teclib',
      product: 'GLPI',
      vulnerabilityName: 'Teclib GLPI Remote Code Execution Vulnerability',
      dateAdded: '2023-03-07',
      shortDescription:
        'Teclib GLPI contains a remote code execution vulnerability in the third-party library, htmlawed.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://glpi-project.org/fr/glpi-10-0-3-disponible/, http://www.bioinformatics.org/phplabware/sourceer/sourceer.php?&Sfs=htmLawedTest.php&Sl=.%2Finternal_utilities%2FhtmLawed.',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-39144',
      vendorProject: 'XStream',
      product: 'XStream',
      vulnerabilityName: 'XStream Remote Code Execution Vulnerability',
      dateAdded: '2023-03-10',
      shortDescription:
        'XStream contains a remote code execution vulnerability that allows an attacker to manipulate the processed input stream and replace or inject objects that result in the execution of a local command on the server. This vulnerability can affect multiple products, including but not limited to VMware Cloud Foundation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.vmware.com/security/advisories/VMSA-2022-0027.html, https://x-stream.github.io/CVE-2021-39144.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-5741',
      vendorProject: 'Plex',
      product: 'Media Server',
      vulnerabilityName:
        'Plex Media Server Remote Code Execution Vulnerability',
      dateAdded: '2023-03-10',
      shortDescription:
        "Plex Media Server contains a remote code execution vulnerability that allows an attacker with access to the server administrator's Plex account to upload a malicious file via the Camera Upload feature and have the media server execute it.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-03-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://forums.plex.tv/t/security-regarding-cve-2020-5741/586819',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-23397',
      vendorProject: 'Microsoft',
      product: 'Office',
      vulnerabilityName:
        'Microsoft Office Outlook Privilege Escalation Vulnerability',
      dateAdded: '2023-03-14',
      shortDescription:
        'Microsoft Office Outlook contains a privilege escalation vulnerability that allows for a NTLM Relay attack against another service to authenticate as the user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-23397, https://msrc.microsoft.com/blog/2023/03/microsoft-mitigates-outlook-elevation-of-privilege-vulnerability/,',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-24880',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows SmartScreen Security Feature Bypass Vulnerability',
      dateAdded: '2023-03-14',
      shortDescription:
        'Microsoft Windows SmartScreen contains a security feature bypass vulnerability that could allow an attacker to evade Mark of the Web (MOTW) defenses via a specially crafted malicious file.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-04',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-24880',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-41328',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName: 'Fortinet FortiOS Path Traversal Vulnerability',
      dateAdded: '2023-03-14',
      shortDescription:
        'Fortinet FortiOS contains a path traversal vulnerability that may allow a local privileged attacker to read and write files via crafted CLI commands.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.fortiguard.com/psirt/FG-IR-22-369',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-26360',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2023-03-15',
      shortDescription:
        'Adobe ColdFusion contains a deserialization of untrusted data vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://helpx.adobe.com/security/products/coldfusion/apsb23-25.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2013-3163',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Memory Corruption Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Microsoft Internet Explorer contains a memory corruption vulnerability that allows remote attackers to execute code or cause a denial of service via a crafted website.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://learn.microsoft.com/en-us/security-updates/securitybulletins/2013/ms13-055',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-7494',
      vendorProject: 'Samba',
      product: 'Samba',
      vulnerabilityName: 'Samba Remote Code Execution Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Samba contains a remote code execution vulnerability, allowing a malicious client to upload a shared library to a writable share and then cause the server to load and execute it.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.samba.org/samba/security/CVE-2017-7494.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-42948',
      vendorProject: 'Fortra',
      product: 'Cobalt Strike',
      vulnerabilityName:
        'Fortra Cobalt Strike User Interface Remote Code Execution Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Fortra Cobalt Strike User Interface contains an unspecified vulnerability rooted in Java Swing that may allow remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.cobaltstrike.com/blog/out-of-band-update-cobalt-strike-4-7-2/',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-39197',
      vendorProject: 'Fortra',
      product: 'Cobalt Strike',
      vulnerabilityName:
        'Fortra Cobalt Strike Teamserver Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Fortra Cobalt Strike contains a cross-site scripting (XSS) vulnerability in Teamserver that would allow an attacker to set a malformed username in the Beacon configuration, allowing them to execute code remotely.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.cobaltstrike.com/blog/out-of-band-update-cobalt-strike-4-7-1/',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-30900',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS Out-of-Bounds Write Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Apple GPU drivers, included in iOS, iPadOS, and macOS, contain an out-of-bounds write vulnerability that may allow a malicious application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT21286, https://support.apple.com/en-us/HT212868, https://support.apple.com/kb/HT212872',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-38181',
      vendorProject: 'Arm',
      product: 'Mali Graphics Processing Unit (GPU)',
      vulnerabilityName:
        'Arm Mali GPU Kernel Driver Use-After-Free Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Arm Mali GPU Kernel Driver contains a use-after-free vulnerability that may allow a non-privileged user to gain root privilege and/or disclose information.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.arm.com/Arm%20Security%20Center/Mali%20GPU%20Driver%20Vulnerabilities',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-0266',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Use-After-Free Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Linux kernel contains a use-after-free vulnerability that allows for privilege escalation to gain ring0 access from the system user.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://git.kernel.org/pub/scm/linux/kernel/git/stable/stable-queue.git/tree/queue-5.10/alsa-pcm-move-rwsem-lock-inside-snd_ctl_elem_read-to-prevent-uaf.patch?id=72783cf35e6c55bca84c4bb7b776c58152856fd4',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-3038',
      vendorProject: 'Google',
      product: 'Chromium Network Service',
      vulnerabilityName:
        'Google Chromium Network Service Use-After-Free Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Google Chromium Network Service contains a use-after-free vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2022/08/stable-channel-update-for-desktop_30.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22706',
      vendorProject: 'Arm',
      product: 'Mali Graphics Processing Unit (GPU)',
      vulnerabilityName: 'Arm Mali GPU Kernel Driver Unspecified Vulnerability',
      dateAdded: '2023-03-30',
      shortDescription:
        'Arm Mali GPU Kernel Driver contains an unspecified vulnerability that allows a non-privileged user to achieve write access to read-only memory pages.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.arm.com/Arm%20Security%20Center/Mali%20GPU%20Driver%20Vulnerabilities',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-27926',
      vendorProject: 'Zimbra',
      product: 'Collaboration (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration (ZCS) Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2023-04-03',
      shortDescription:
        'Zimbra Collaboration Suite (ZCS) contains a cross-site scripting vulnerability by allowing an endpoint URL to accept parameters without sanitizing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://wiki.zimbra.com/wiki/Security_Center',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27876',
      vendorProject: 'Veritas',
      product: 'Backup Exec Agent',
      vulnerabilityName: 'Veritas Backup Exec Agent File Access Vulnerability',
      dateAdded: '2023-04-07',
      shortDescription:
        'Veritas Backup Exec (BE) Agent contains a file access vulnerability that could allow an attacker to specially craft input parameters on a data management protocol command to access files on the BE Agent machine.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-28',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.veritas.com/support/en_US/security/VTS21-001',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27877',
      vendorProject: 'Veritas',
      product: 'Backup Exec Agent',
      vulnerabilityName:
        'Veritas Backup Exec Agent Improper Authentication Vulnerability',
      dateAdded: '2023-04-07',
      shortDescription:
        'Veritas Backup Exec (BE) Agent contains an improper authentication vulnerability that could allow an attacker unauthorized access to the BE Agent via SHA authentication scheme.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-28',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.veritas.com/support/en_US/security/VTS21-001',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-27878',
      vendorProject: 'Veritas',
      product: 'Backup Exec Agent',
      vulnerabilityName:
        'Veritas Backup Exec Agent Command Execution Vulnerability',
      dateAdded: '2023-04-07',
      shortDescription:
        'Veritas Backup Exec (BE) Agent contains a command execution vulnerability that could allow an attacker to use a data management protocol command to execute a command on the BE Agent machine.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-28',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.veritas.com/support/en_US/security/VTS21-001',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-1388',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Certificate Dialog Privilege Escalation Vulnerability',
      dateAdded: '2023-04-07',
      shortDescription:
        'Microsoft Windows Certificate Dialog contains a privilege escalation vulnerability, allowing attackers to run processes in an elevated context.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-28',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-1388',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-26083',
      vendorProject: 'Arm',
      product: 'Mali Graphics Processing Unit (GPU)',
      vulnerabilityName:
        'Arm Mali GPU Kernel Driver Information Disclosure Vulnerability',
      dateAdded: '2023-04-07',
      shortDescription:
        'Arm Mali GPU Kernel Driver contains an information disclosure vulnerability that allows a non-privileged user to make valid GPU processing operations that expose sensitive kernel metadata.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-04-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.arm.com/Arm%20Security%20Center/Mali%20GPU%20Driver%20Vulnerabilities',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28205',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Use-After-Free Vulnerability',
      dateAdded: '2023-04-10',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213720,https://support.apple.com/en-us/HT213721,https://support.apple.com/en-us/HT213722,https://support.apple.com/en-us/HT213723',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28206',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS IOSurfaceAccelerator Out-of-Bounds Write Vulnerability',
      dateAdded: '2023-04-10',
      shortDescription:
        'Apple iOS, iPadOS, and macOS IOSurfaceAccelerator contain an out-of-bounds write vulnerability that allows an app to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213720, https://support.apple.com/en-us/HT213721',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28252',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Common Log File System (CLFS) Driver Privilege Escalation Vulnerability',
      dateAdded: '2023-04-11',
      shortDescription:
        'Microsoft Windows Common Log File System (CLFS) driver contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-02',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-28252',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20963',
      vendorProject: 'Android',
      product: 'Framework',
      vulnerabilityName: 'Android Framework Privilege Escalation Vulnerability',
      dateAdded: '2023-04-13',
      shortDescription:
        'Android Framework contains an unspecified vulnerability that allows for privilege escalation after updating an app to a higher Target SDK with no additional execution privileges needed.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://source.android.com/docs/security/bulletin/2023-03-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29492',
      vendorProject: 'Novi Survey',
      product: 'Novi Survey',
      vulnerabilityName: 'Novi Survey Insecure Deserialization Vulnerability',
      dateAdded: '2023-04-13',
      shortDescription:
        'Novi Survey contains an insecure deserialization vulnerability that allows remote attackers to execute code on the server in the context of the service account.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://novisurvey.net/blog/novi-survey-security-advisory-apr-2023.aspx',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-8526',
      vendorProject: 'Apple',
      product: 'macOS',
      vulnerabilityName: 'Apple macOS Use-After-Free Vulnerability',
      dateAdded: '2023-04-17',
      shortDescription:
        'Apple macOS contains a use-after-free vulnerability that could allow for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://support.apple.com/en-us/HT209600',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-2033',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2023-04-17',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-08',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2023/04/stable-channel-update-for-desktop_14.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6742',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE Software',
      vulnerabilityName:
        'Cisco IOS and IOS XE Software SNMP Remote Code Execution Vulnerability',
      dateAdded: '2023-04-19',
      shortDescription:
        'The Simple Network Management Protocol (SNMP) subsystem of Cisco IOS and IOS XE contains a vulnerability that could allow an authenticated, remote attacker to remotely execute code on an affected system or cause an affected system to reload.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20170629-snmp',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28432',
      vendorProject: 'MinIO',
      product: 'MinIO',
      vulnerabilityName: 'MinIO Information Disclosure Vulnerability',
      dateAdded: '2023-04-21',
      shortDescription:
        'MinIO contains a vulnerability in a cluster deployment where MinIO returns all environment variables, which allows for information disclosure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://github.com/minio/minio/security/advisories/GHSA-6xvq-wj2x-3h3q',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-27350',
      vendorProject: 'PaperCut',
      product: 'MF/NG',
      vulnerabilityName: 'PaperCut MF/NG Improper Access Control Vulnerability',
      dateAdded: '2023-04-21',
      shortDescription:
        'PaperCut MF/NG contains an improper access control vulnerability within the SetupCompleted class that allows authentication bypass and code execution in the context of system.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-12',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.papercut.com/kb/Main/PO-1216-and-PO-1219',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-2136',
      vendorProject: 'Google',
      product: 'Chromium Skia',
      vulnerabilityName: 'Google Chrome Skia Integer Overflow Vulnerability',
      dateAdded: '2023-04-21',
      shortDescription:
        'Google Chromium Skia contains an integer overflow vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a crafted HTML page. This vulnerability affects Google Chrome and ChromeOS, Android, Flutter, and possibly other products.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2023/04/stable-channel-update-for-desktop_18.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-1389',
      vendorProject: 'TP-Link',
      product: 'Archer AX21',
      vulnerabilityName: 'TP-Link Archer AX-21 Command Injection Vulnerability',
      dateAdded: '2023-05-01',
      shortDescription:
        'TP-Link Archer AX-21 contains a command injection vulnerability that allows for remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.tp-link.com/us/support/download/archer-ax21/v3/#Firmware',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-45046',
      vendorProject: 'Apache',
      product: 'Log4j2',
      vulnerabilityName:
        'Apache Log4j2 Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2023-05-01',
      shortDescription:
        'Apache Log4j2 contains a deserialization of untrusted data vulnerability due to the incomplete fix of CVE-2021-44228, where the Thread Context Lookup Pattern is vulnerable to remote code execution in certain non-default configurations.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-22',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://logging.apache.org/log4j/2.x/security.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21839',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName: 'Oracle WebLogic Server Unspecified Vulnerability',
      dateAdded: '2023-05-01',
      shortDescription:
        'Oracle WebLogic Server contains an unspecified vulnerability that allows an unauthenticated attacker with network access via T3, IIOP, to compromise Oracle WebLogic Server.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.oracle.com/security-alerts/cpujan2023.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29336',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32K Privilege Escalation Vulnerability',
      dateAdded: '2023-05-09',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation up to SYSTEM privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-05-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-29336',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-25717',
      vendorProject: 'Ruckus Wireless',
      product: 'Multiple Products',
      vulnerabilityName:
        'Multiple Ruckus Wireless Products CSRF and RCE Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        'Ruckus Wireless Access Point (AP) software contains an unspecified vulnerability in the web services component. If the web services component is enabled on the AP, an attacker can perform cross-site request forgery (CSRF) or remote code execution (RCE). This vulnerability impacts Ruckus ZoneDirector, SmartZone, and Solo APs.',
      requiredAction:
        'Apply updates per vendor instructions or disconnect product if it is end-of-life.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://support.ruckuswireless.com/security_bulletins/315',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-3560',
      vendorProject: 'Red Hat',
      product: 'Polkit',
      vulnerabilityName: 'Red Hat Polkit Incorrect Authorization Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        'Red Hat Polkit contains an incorrect authorization vulnerability through the bypassing of credential checks for D-Bus requests, allowing for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://bugzilla.redhat.com/show_bug.cgi?id=1961710',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-0196',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Race Condition Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        'Linux Kernel contains a race condition vulnerability within the n_tty_write function that allows local users to cause a denial-of-service (DoS) or gain privileges via read and write operations with long strings.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lkml.iu.edu/hypermail/linux/kernel/1609.1/02103.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2010-3904',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Improper Input Validation Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        'Linux Kernel contains an improper input validation vulnerability in the Reliable Datagram Sockets (RDS) protocol implementation that allows local users to gain privileges via crafted use of the sendmsg and recvmsg system calls.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lkml.iu.edu/hypermail/linux/kernel/1601.3/06474.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2015-5317',
      vendorProject: 'Jenkins',
      product: 'Jenkins User Interface (UI)',
      vulnerabilityName:
        'Jenkins User Interface (UI) Information Disclosure Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        'Jenkins User Interface (UI) contains an information disclosure vulnerability that allows users to see the names of jobs and builds otherwise inaccessible to them on the "Fingerprints" pages.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.jenkins.io/security/advisory/2015-11-11/',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-3427',
      vendorProject: 'Oracle',
      product: 'Java SE and JRockit',
      vulnerabilityName: 'Oracle Java SE and JRockit Unspecified Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        'Oracle Java SE and JRockit contains an unspecified vulnerability that allows remote attackers to affect confidentiality, integrity, and availability via vectors related to Java Management Extensions (JMX). This vulnerability can be exploited through sandboxed Java Web Start applications and sandboxed Java applets. It can also be exploited by supplying data to APIs in the specified component without using sandboxed Java Web Start applications or sandboxed Java applets, such as through a web service.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.oracle.com/security-alerts/cpuapr2016v3.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-8735',
      vendorProject: 'Apache',
      product: 'Tomcat',
      vulnerabilityName: 'Apache Tomcat Remote Code Execution Vulnerability',
      dateAdded: '2023-05-12',
      shortDescription:
        "Apache Tomcat contains an unspecified vulnerability that allows for remote code execution if JmxRemoteLifecycleListener is used and an attacker can reach Java Management Extension (JMX) ports. This CVE exists because this listener wasn't updated for consistency with the Oracle patched issues for CVE-2016-3427 which affected credential types.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://tomcat.apache.org/security-9.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2004-1464',
      vendorProject: 'Cisco',
      product: 'IOS',
      vulnerabilityName: 'Cisco IOS Denial-of-Service Vulnerability',
      dateAdded: '2023-05-19',
      shortDescription:
        'Cisco IOS contains an unspecified vulnerability that may block further telnet, reverse telnet, Remote Shell (RSH), Secure Shell (SSH), and in some cases, Hypertext Transport Protocol (HTTP) access to the Cisco device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20040827-telnet',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-6415',
      vendorProject: 'Cisco',
      product: 'IOS, IOS XR, and IOS XE',
      vulnerabilityName:
        'Cisco IOS, IOS XR, and IOS XE IKEv1 Information Disclosure Vulnerability',
      dateAdded: '2023-05-19',
      shortDescription:
        'Cisco IOS, IOS XR, and IOS XE contain insufficient condition checks in the part of the code that handles Internet Key Exchange version 1 (IKEv1) security negotiation requests. contains an information disclosure vulnerability in the Internet Key Exchange version 1 (IKEv1) that could allow an attacker to retrieve memory contents. Successful exploitation could allow the attacker to retrieve memory contents, which can lead to information disclosure.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20160916-ikev1',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21492',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Insertion of Sensitive Information Into Log File Vulnerability',
      dateAdded: '2023-05-19',
      shortDescription:
        'Samsung mobile devices running Android 11, 12, and 13 contain an insertion of sensitive information into log file vulnerability that allows a privileged, local attacker to conduct an address space layout randomization (ASLR) bypass.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.samsungmobile.com/securityUpdate.smsb',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32409',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Sandbox Escape Vulnerability',
      dateAdded: '2023-05-22',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, watchOS, and Safari WebKit contain an unspecified vulnerability that can allow a remote attacker to break out of the Web Content sandbox. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/HT213757, https://support.apple.com/HT213758, https://support.apple.com/HT213761, https://support.apple.com/HT213762, https://support.apple.com/HT213764, https://support.apple.com/HT213765',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28204',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Out-of-Bounds Read Vulnerability',
      dateAdded: '2023-05-22',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, watchOS, and Safari WebKit contain an out-of-bounds read vulnerability that may disclose sensitive information when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/HT213757, https://support.apple.com/HT213758, https://support.apple.com/HT213761, https://support.apple.com/HT213762, https://support.apple.com/HT213764, https://support.apple.com/HT213765',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32373',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Use-After-Free Vulnerability',
      dateAdded: '2023-05-22',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, watchOS, and Safari WebKit contain a use-after-free vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/HT213757, https://support.apple.com/HT213758, https://support.apple.com/HT213761, https://support.apple.com/HT213762, https://support.apple.com/HT213764, https://support.apple.com/HT213765',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-2868',
      vendorProject: 'Barracuda Networks',
      product: 'Email Security Gateway (ESG) Appliance',
      vulnerabilityName:
        'Barracuda Networks ESG Appliance Improper Input Validation Vulnerability',
      dateAdded: '2023-05-26',
      shortDescription:
        'Barracuda Email Security Gateway (ESG) appliance contains an improper input validation vulnerability of a user-supplied .tar file, leading to remote command injection.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://status.barracuda.com/incidents/34kx82j5n4q9',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28771',
      vendorProject: 'Zyxel',
      product: 'Multiple Firewalls',
      vulnerabilityName:
        'Zyxel Multiple Firewalls OS Command Injection Vulnerability',
      dateAdded: '2023-05-31',
      shortDescription:
        'Zyxel ATP, USG FLEX, VPN, and ZyWALL/USG firewalls allow for improper error message handling which could allow an unauthenticated attacker to execute OS commands remotely by sending crafted packets to an affected device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-remote-command-injection-vulnerability-of-firewalls',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-34362',
      vendorProject: 'Progress',
      product: 'MOVEit Transfer',
      vulnerabilityName: 'Progress MOVEit Transfer SQL Injection Vulnerability',
      dateAdded: '2023-06-02',
      shortDescription:
        "Progress MOVEit Transfer contains a SQL injection vulnerability that could allow an unauthenticated attacker to gain unauthorized access to MOVEit Transfer's database. Depending on the database engine being used (MySQL, Microsoft SQL Server, or Azure SQL), an attacker may be able to infer information about the structure and contents of the database in addition to executing SQL statements that alter or delete database elements.",
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-23',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'This CVE has a CISA AA located here: https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a. Please see the AA for associated IOCs. Additional information is available at: https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023.',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-33009',
      vendorProject: 'Zyxel',
      product: 'Multiple Firewalls',
      vulnerabilityName:
        'Zyxel Multiple Firewalls Buffer Overflow Vulnerability',
      dateAdded: '2023-06-05',
      shortDescription:
        'Zyxel ATP, USG FLEX, USG FLEX 50(W), USG20(W)-VPN, VPN, and ZyWALL/USG firewalls contain a buffer overflow vulnerability in the notification function that could allow an unauthenticated attacker to cause denial-of-service (DoS) conditions and remote code execution on an affected device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-multiple-buffer-overflow-vulnerabilities-of-firewalls',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-33010',
      vendorProject: 'Zyxel',
      product: 'Multiple Firewalls',
      vulnerabilityName:
        'Zyxel Multiple Firewalls Buffer Overflow Vulnerability',
      dateAdded: '2023-06-05',
      shortDescription:
        'Zyxel ATP, USG FLEX, USG FLEX 50(W), USG20(W)-VPN, VPN, and ZyWALL/USG firewalls contain a buffer overflow vulnerability in the ID processing function that could allow an unauthenticated attacker to cause denial-of-service (DoS) conditions and remote code execution on an affected device.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-multiple-buffer-overflow-vulnerabilities-of-firewalls',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-3079',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2023-06-07',
      shortDescription:
        'Google Chromium V8 Engine contains a type confusion vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-06-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2023/06/stable-channel-update-for-desktop.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-27997',
      vendorProject: 'Fortinet',
      product: 'FortiOS and FortiProxy SSL-VPN',
      vulnerabilityName:
        'Fortinet FortiOS and FortiProxy SSL-VPN Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2023-06-13',
      shortDescription:
        'Fortinet FortiOS and FortiProxy SSL-VPN contain a heap-based buffer overflow vulnerability which can allow an unauthenticated, remote attacker to execute code or commands via specifically crafted requests.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.fortiguard.com/psirt/FG-IR-23-097',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20887',
      vendorProject: 'VMware',
      product: 'Aria Operations for Networks',
      vulnerabilityName:
        'Vmware Aria Operations for Networks Command Injection Vulnerability',
      dateAdded: '2023-06-22',
      shortDescription:
        'VMware Aria Operations for Networks (formerly vRealize Network Insight) contains a command injection vulnerability that allows a malicious actor with network access to perform an attack resulting in remote code execution.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.vmware.com/security/advisories/VMSA-2023-0012.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-35730',
      vendorProject: 'Roundcube',
      product: 'Roundcube Webmail',
      vulnerabilityName:
        'Roundcube Webmail Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2023-06-22',
      shortDescription:
        'Roundcube Webmail contains a cross-site scripting (XSS) vulnerability that allows an attacker to send a plain text e-mail message with Javascript in a link reference element that is mishandled by linkref_addinindex in rcube_string_replacer.php.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://roundcube.net/news/2020/12/27/security-updates-1.4.10-1.3.16-and-1.2.13',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-12641',
      vendorProject: 'Roundcube',
      product: 'Roundcube Webmail',
      vulnerabilityName:
        'Roundcube Webmail Remote Code Execution Vulnerability',
      dateAdded: '2023-06-22',
      shortDescription:
        'Roundcube Webmail contains an remote code execution vulnerability that allows attackers to execute code via shell metacharacters in a configuration setting for im_convert_path or im_identify_path.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://roundcube.net/news/2020/04/29/security-updates-1.4.4-1.3.11-and-1.2.10',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-44026',
      vendorProject: 'Roundcube',
      product: 'Roundcube Webmail',
      vulnerabilityName: 'Roundcube Webmail SQL Injection Vulnerability',
      dateAdded: '2023-06-22',
      shortDescription:
        'Roundcube Webmail is vulnerable to SQL injection via search or search_params.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://roundcube.net/news/2021/11/12/security-updates-1.4.12-and-1.3.17-released',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-9079',
      vendorProject: 'Mozilla',
      product: 'Firefox, Firefox ESR, and Thunderbird',
      vulnerabilityName:
        'Mozilla Firefox, Firefox ESR, and Thunderbird Use-After-Free Vulnerability',
      dateAdded: '2023-06-22',
      shortDescription:
        'Mozilla Firefox, Firefox ESR, and Thunderbird contain a use-after-free vulnerability in SVG Animation, targeting Firefox and Tor browser users on Windows.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.mozilla.org/en-US/security/advisories/mfsa2016-92/#CVE-2016-9079',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-0165',
      vendorProject: 'Microsoft',
      product: 'Win32k',
      vulnerabilityName: 'Microsoft Win32k Privilege Escalation Vulnerability',
      dateAdded: '2023-06-22',
      shortDescription:
        'Microsoft Win32k contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://learn.microsoft.com/en-us/security-updates/securitybulletins/2016/ms16-039',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32434',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Integer Overflow Vulnerability',
      dateAdded: '2023-06-23',
      shortDescription:
        'Apple iOS. iPadOS, macOS, and watchOS contain an integer overflow vulnerability that could allow an application to execute code with kernel privileges.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213808, https://support.apple.com/en-us/HT213812, https://support.apple.com/en-us/HT213809, https://support.apple.com/en-us/HT213810, https://support.apple.com/en-us/HT213813, https://support.apple.com/en-us/HT213811, https://support.apple.com/en-us/HT213814',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32435',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Memory Corruption Vulnerability',
      dateAdded: '2023-06-23',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain a memory corruption vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213670, https://support.apple.com/en-us/HT213671, https://support.apple.com/en-us/HT213676, https://support.apple.com/en-us/HT213811',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32439',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Type Confusion Vulnerability',
      dateAdded: '2023-06-23',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain a type confusion vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213813, https://support.apple.com/en-us/HT213811, https://support.apple.com/en-us/HT213814, https://support.apple.com/en-us/HT213816',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20867',
      vendorProject: 'VMware',
      product: 'Tools',
      vulnerabilityName: 'VMware Tools Authentication Bypass Vulnerability',
      dateAdded: '2023-06-23',
      shortDescription:
        'VMware Tools contains an authentication bypass vulnerability in the vgauth module. A fully compromised ESXi host can force VMware Tools to fail to authenticate host-to-guest operations, impacting the confidentiality and integrity of the guest virtual machine. An attacker must have root access over ESXi to exploit this vulnerability.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.vmware.com/security/advisories/VMSA-2023-0013.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-27992',
      vendorProject: 'Zyxel',
      product: 'Multiple Network-Attached Storage (NAS) Devices',
      vulnerabilityName:
        'Zyxel Multiple NAS Devices Command Injection Vulnerability',
      dateAdded: '2023-06-23',
      shortDescription:
        'Multiple Zyxel network-attached storage (NAS) devices contain a pre-authentication command injection vulnerability that could allow an unauthenticated attacker to execute commands remotely via a crafted HTTP request.',
      requiredAction: 'Apply updates per vendor instructions.',
      dueDate: '2023-07-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-pre-authentication-command-injection-vulnerability-in-nas-products',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-17621',
      vendorProject: 'D-Link',
      product: 'DIR-859 Router',
      vulnerabilityName:
        'D-Link DIR-859 Router Command Execution Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'D-Link DIR-859 router contains a command execution vulnerability in the UPnP endpoint URL, /gena.cgi. Exploitation allows an unauthenticated remote attacker to execute system commands as root by sending a specially crafted HTTP SUBSCRIBE request to the UPnP service when connecting to the local network.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportannouncement.us.dlink.com/announcement/publication.aspx?name=SAP10147',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-20500',
      vendorProject: 'D-Link',
      product: 'DWL-2600AP Access Point',
      vulnerabilityName:
        'D-Link DWL-2600AP Access Point Command Injection Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'D-Link DWL-2600AP access point contains an authenticated command injection vulnerability via the Save Configuration functionality in the Web interface, using shell metacharacters in the admin.cgi?action=config_save configBackup or downloadServerip parameter.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportannouncement.us.dlink.com/announcement/publication.aspx?name=SAP10113',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25487',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Out-of-Bounds Read Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'Samsung mobile devices contain an out-of-bounds read vulnerability within the modem interface driver due to a lack of boundary checking of a buffer in set_skb_priv(), leading to remote code execution by dereference of an invalid function pointer.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2021&month=10',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25489',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Improper Input Validation Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'Samsung mobile devices contain an improper input validation vulnerability within the modem interface driver that results in a format string bug leading to kernel panic.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2021&month=10',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25394',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName: 'Samsung Mobile Devices Race Condition Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'Samsung mobile devices contain a race condition vulnerability within the MFC charger driver that leads to a use-after-free allowing for a write given a radio privilege is compromised.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2021&month=5',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25395',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName: 'Samsung Mobile Devices Race Condition Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'Samsung mobile devices contain a race condition vulnerability within the MFC charger driver that leads to a use-after-free allowing for a write given a radio privilege is compromised.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2021&month=5',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25371',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName: 'Samsung Mobile Devices Unspecified Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'Samsung mobile devices contain an unspecified vulnerability within DSP driver that allows attackers to load ELF libraries inside DSP.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2021&month=3',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-25372',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName:
        'Samsung Mobile Devices Improper Boundary Check Vulnerability',
      dateAdded: '2023-06-29',
      shortDescription:
        'Samsung mobile devices contain an improper boundary check vulnerability within DSP driver that allows for out-of-bounds memory access.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable',
      dueDate: '2023-07-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2021&month=3',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-29256',
      vendorProject: 'Arm',
      product: 'Mali Graphics Processing Unit (GPU)',
      vulnerabilityName:
        'Arm Mali GPU Kernel Driver Use-After-Free Vulnerability',
      dateAdded: '2023-07-07',
      shortDescription:
        'Arm Mali GPU Kernel Driver contains a use-after-free vulnerability that may allow a non-privileged user to gain root privilege and/or disclose information.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-07-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.arm.com/Arm%20Security%20Center/Mali%20GPU%20Driver%20Vulnerabilities',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32046',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows MSHTML Platform Privilege Escalation Vulnerability',
      dateAdded: '2023-07-11',
      shortDescription:
        'Microsoft Windows MSHTML Platform contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-32046',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32049',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Defender SmartScreen Security Feature Bypass Vulnerability',
      dateAdded: '2023-07-11',
      shortDescription:
        'Microsoft Windows Defender SmartScreen contains a security feature bypass vulnerability that allows an attacker to bypass the Open File - Security Warning prompt.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-32049',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-35311',
      vendorProject: 'Microsoft',
      product: 'Outlook',
      vulnerabilityName:
        'Microsoft Outlook Security Feature Bypass Vulnerability',
      dateAdded: '2023-07-11',
      shortDescription:
        'Microsoft Outlook contains a security feature bypass vulnerability that allows an attacker to bypass the Microsoft Outlook Security Notice prompt.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-35311',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36874',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Error Reporting Service Privilege Escalation Vulnerability',
      dateAdded: '2023-07-11',
      shortDescription:
        'Microsoft Windows Error Reporting Service contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-36874',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-31199',
      vendorProject: 'Netwrix',
      product: 'Auditor',
      vulnerabilityName:
        'Netwrix Auditor Insecure Object Deserialization Vulnerability',
      dateAdded: '2023-07-11',
      shortDescription:
        'Netwrix Auditor User Activity Video Recording component contains an insecure objection deserialization vulnerability that allows an unauthenticated, remote attacker to execute code as the NT AUTHORITY\\SYSTEM user. Successful exploitation requires that the attacker is able to reach port 9004/TCP, which is commonly blocked by standard enterprise firewalling.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-01',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'Patch application requires login to customer portal: https://security.netwrix.com/Account/SignIn?ReturnUrl=%2FAdvisories%2FADV-2022-003',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-29303',
      vendorProject: 'SolarView',
      product: 'Compact',
      vulnerabilityName: 'SolarView Compact Command Injection Vulnerability',
      dateAdded: '2023-07-13',
      shortDescription:
        "SolarView Compact contains a command injection vulnerability due to improper validation of input values on the send test mail console of the product's web server.",
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://jvn.jp/en/vu/JVNVU92327282/',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-37450',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Code Execution Vulnerability',
      dateAdded: '2023-07-13',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain an unspecified vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2023-08-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213826, https://support.apple.com/en-us/HT213841, https://support.apple.com/en-us/HT213843, https://support.apple.com/en-us/HT213846, https://support.apple.com/en-us/HT213848',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36884',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Search Remote Code Execution Vulnerability',
      dateAdded: '2023-07-17',
      shortDescription:
        'Microsoft Windows Search contains an unspecified vulnerability that could allow an attacker to evade Mark of the Web (MOTW) defenses via a specially crafted malicious file, leading to remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-29',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-36884',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-3519',
      vendorProject: 'Citrix',
      product: 'NetScaler ADC and NetScaler Gateway',
      vulnerabilityName:
        'Citrix NetScaler ADC and NetScaler Gateway Code Injection Vulnerability',
      dateAdded: '2023-07-19',
      shortDescription:
        'Citrix NetScaler ADC and NetScaler Gateway contains a code injection vulnerability that allows for unauthenticated remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-09',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://support.citrix.com/article/CTX561482/citrix-adc-and-citrix-gateway-security-bulletin-for-cve20233519-cve20233466-cve20233467',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29298',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Improper Access Control Vulnerability',
      dateAdded: '2023-07-20',
      shortDescription:
        'Adobe ColdFusion contains an improper access control vulnerability that allows for a security feature bypass.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://helpx.adobe.com/security/products/coldfusion/apsb23-40.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-38205',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Improper Access Control Vulnerability',
      dateAdded: '2023-07-20',
      shortDescription:
        'Adobe ColdFusion contains an improper access control vulnerability that allows for a security feature bypass.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://helpx.adobe.com/security/products/coldfusion/apsb23-47.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-35078',
      vendorProject: 'Ivanti',
      product: 'Endpoint Manager Mobile (EPMM)',
      vulnerabilityName:
        'Ivanti Endpoint Manager Mobile Authentication Bypass Vulnerability',
      dateAdded: '2023-07-25',
      shortDescription:
        'Ivanti Endpoint Manager Mobile (EPMM, previously branded MobileIron Core) contains an authentication bypass vulnerability that allows unauthenticated access to specific API paths. An attacker with access to these API paths can access personally identifiable information (PII) such as names, phone numbers, and other mobile device details for users on a vulnerable system. An attacker can also make other configuration changes including installing software and modifying security profiles on registered devices.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-15',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://forums.ivanti.com/s/article/CVE-2023-35078-Remote-unauthenticated-API-access-vulnerability?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-38606',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Kernel Unspecified Vulnerability',
      dateAdded: '2023-07-26',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and watchOS contain an unspecified vulnerability allowing an app to modify a sensitive kernel state.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213841, https://support.apple.com/en-us/HT213842, https://support.apple.com/en-us/HT213843,https://support.apple.com/en-us/HT213844,https://support.apple.com/en-us/HT213845,https://support.apple.com/en-us/HT213846,https://support.apple.com/en-us/HT213848',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-37580',
      vendorProject: 'Zimbra',
      product: 'Collaboration (ZCS)',
      vulnerabilityName:
        'Zimbra Collaboration (ZCS) Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2023-07-27',
      shortDescription:
        'Zimbra Collaboration Suite (ZCS) contains a cross-site scripting vulnerability impacting the confidentiality and integrity of data.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://wiki.zimbra.com/wiki/Security_Center',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-35081',
      vendorProject: 'Ivanti',
      product: 'Endpoint Manager Mobile (EPMM)',
      vulnerabilityName:
        'Ivanti Endpoint Manager Mobile (EPMM) Path Traversal Vulnerability',
      dateAdded: '2023-07-31',
      shortDescription:
        'Ivanti Endpoint Manager Mobile (EPMM) contains a path traversal vulnerability that enables an authenticated administrator to perform malicious file writes to the EPMM server. This vulnerability can be used in conjunction with CVE-2023-35078 to bypass authentication and ACLs restrictions (if applicable).',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://forums.ivanti.com/s/article/CVE-2023-35081-Arbitrary-File-Write?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-18368',
      vendorProject: 'Zyxel',
      product: 'P660HN-T1A Routers',
      vulnerabilityName:
        'Zyxel P660HN-T1A Routers Command Injection Vulnerability',
      dateAdded: '2023-08-07',
      shortDescription:
        'Zyxel P660HN-T1A routers contain a command injection vulnerability in the Remote System Log forwarding function, which is accessible by an unauthenticated user and exploited via the remote_host parameter of the ViewLog.asp page.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-28',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-a-new-variant-of-gafgyt-malware; https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-command-injection-vulnerability-in-p660hn-t1a-dsl-cpe',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-38180',
      vendorProject: 'Microsoft',
      product: '.NET Core and Visual Studio',
      vulnerabilityName:
        'Microsoft .NET Core and Visual Studio Denial-of-Service Vulnerability',
      dateAdded: '2023-08-09',
      shortDescription:
        'Microsoft .NET Core and Visual Studio contain an unspecified vulnerability that allows for denial-of-service (DoS).',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-08-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-38180',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-24489',
      vendorProject: 'Citrix',
      product: 'Content Collaboration',
      vulnerabilityName:
        'Citrix Content Collaboration ShareFile Improper Access Control Vulnerability',
      dateAdded: '2023-08-16',
      shortDescription:
        'Citrix Content Collaboration contains an improper access control vulnerability that could allow an unauthenticated attacker to remotely compromise customer-managed ShareFile storage zones controllers.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.citrix.com/article/CTX559517/sharefile-storagezones-controller-security-update-for-cve202324489',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-26359',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2023-08-21',
      shortDescription:
        'Adobe ColdFusion contains a deserialization of untrusted data vulnerability that could result in code execution in the context of the current user.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-11',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://helpx.adobe.com/security/products/coldfusion/apsb23-25.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-38035',
      vendorProject: 'Ivanti',
      product: 'Sentry',
      vulnerabilityName: 'Ivanti Sentry Authentication Bypass Vulnerability',
      dateAdded: '2023-08-22',
      shortDescription:
        'Ivanti Sentry, formerly known as MobileIron Sentry, contains an authentication bypass vulnerability that may allow an attacker to bypass authentication controls on the administrative interface due to an insufficiently restrictive Apache HTTPD configuration.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-12',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://forums.ivanti.com/s/article/CVE-2023-38035-API-Authentication-Bypass-on-Sentry-Administrator-Interface?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-27532',
      vendorProject: 'Veeam',
      product: 'Backup & Replication',
      vulnerabilityName:
        'Veeam Backup & Replication Cloud Connect Missing Authentication for Critical Function Vulnerability',
      dateAdded: '2023-08-22',
      shortDescription:
        'Veeam Backup & Replication Cloud Connect component contains a missing authentication for critical function vulnerability that allows an unauthenticated user operating within the backup infrastructure network perimeter to obtain encrypted credentials stored in the configuration database. This may lead to an attacker gaining access to the backup infrastructure hosts.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-12',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.veeam.com/kb4424',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-38831',
      vendorProject: 'RARLAB',
      product: 'WinRAR',
      vulnerabilityName: 'RARLAB WinRAR Code Execution Vulnerability',
      dateAdded: '2023-08-24',
      shortDescription:
        'RARLAB WinRAR contains an unspecified vulnerability that allows an attacker to execute code when a user attempts to view a benign file within a ZIP archive.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'http://www.win-rar.com/singlenewsview.html?&L=0&tx_ttnews%5Btt_news%5D=232&cHash=c5bf79590657e32554c6683296a8e8aa',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-32315',
      vendorProject: 'Ignite Realtime',
      product: 'Openfire',
      vulnerabilityName:
        'Ignite Realtime Openfire Path Traversal Vulnerability',
      dateAdded: '2023-08-24',
      shortDescription:
        'Ignite Realtime Openfire contains a path traversal vulnerability that allows an unauthenticated attacker to access restricted pages in the Openfire Admin Console reserved for administrative users.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.igniterealtime.org/downloads/#openfire',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-33246',
      vendorProject: 'Apache',
      product: 'RocketMQ',
      vulnerabilityName: 'Apache RocketMQ Command Execution Vulnerability',
      dateAdded: '2023-09-06',
      shortDescription:
        'Several components of Apache RocketMQ, including NameServer, Broker, and Controller, are exposed to the extranet and lack permission verification. An attacker can exploit this vulnerability by using the update configuration function to execute commands as the system users that RocketMQ is running as or achieve the same effect by forging the RocketMQ protocol content.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-09-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lists.apache.org/thread/1s8j2c8kogthtpv3060yddk03zq0pxyp',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41064',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and macOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and macOS ImageIO Buffer Overflow Vulnerability',
      dateAdded: '2023-09-11',
      shortDescription:
        'Apple iOS, iPadOS, and macOS contain a buffer overflow vulnerability in ImageIO when processing a maliciously crafted image, which may lead to code execution. This vulnerability was chained with CVE-2023-41061.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213905, https://support.apple.com/en-us/HT213906',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41061',
      vendorProject: 'Apple',
      product: 'iOS, iPadOS, and watchOS',
      vulnerabilityName:
        'Apple iOS, iPadOS, and watchOS Wallet Code Execution Vulnerability',
      dateAdded: '2023-09-11',
      shortDescription:
        'Apple iOS, iPadOS, and watchOS contain an unspecified vulnerability due to a validation issue affecting Wallet in which a maliciously crafted attachment may result in code execution. This vulnerability was chained with CVE-2023-41064.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213905, https://support.apple.com/kb/HT213907',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36761',
      vendorProject: 'Microsoft',
      product: 'Word',
      vulnerabilityName: 'Microsoft Word Information Disclosure Vulnerability',
      dateAdded: '2023-09-12',
      shortDescription:
        'Microsoft Word contains an unspecified vulnerability that allows for information disclosure.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-36761',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36802',
      vendorProject: 'Microsoft',
      product: 'Streaming Service Proxy',
      vulnerabilityName:
        'Microsoft Streaming Service Proxy Privilege Escalation Vulnerability',
      dateAdded: '2023-09-12',
      shortDescription:
        'Microsoft Streaming Service Proxy contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-36802',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-35674',
      vendorProject: 'Android',
      product: 'Framework',
      vulnerabilityName: 'Android Framework Privilege Escalation Vulnerability',
      dateAdded: '2023-09-13',
      shortDescription:
        'Android Framework contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://source.android.com/docs/security/bulletin/2023-09-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20269',
      vendorProject: 'Cisco',
      product: 'Adaptive Security Appliance and Firepower Threat Defense',
      vulnerabilityName:
        'Cisco Adaptive Security Appliance and Firepower Threat Defense Unauthorized Access Vulnerability',
      dateAdded: '2023-09-13',
      shortDescription:
        'Cisco Adaptive Security Appliance and Firepower Threat Defense contain an unauthorized access vulnerability that could allow an unauthenticated, remote attacker to conduct a brute force attack in an attempt to identify valid username and password combinations or establish a clientless SSL VPN session with an unauthorized user.',
      requiredAction:
        'Apply mitigations per vendor instructions for group-lock and vpn-simultaneous-logins or discontinue use of the product for unsupported devices.',
      dueDate: '2023-10-04',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-ravpn-auth-8LyfCkeC',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-4863',
      vendorProject: 'Google',
      product: 'Chromium WebP',
      vulnerabilityName:
        'Google Chromium WebP Heap-Based Buffer Overflow Vulnerability',
      dateAdded: '2023-09-13',
      shortDescription:
        'Google Chromium WebP contains a heap-based buffer overflow vulnerability that allows a remote attacker to perform an out-of-bounds memory write via a crafted HTML page. This vulnerability can affect applications that use the WebP Codec.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2023/09/stable-channel-update-for-desktop_11.html?m=1',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-26369',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Out-of-Bounds Write Vulnerability',
      dateAdded: '2023-09-14',
      shortDescription:
        'Adobe Acrobat and Reader contains an out-of-bounds write vulnerability that allows for code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://helpx.adobe.com/security/products/acrobat/apsb23-34.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22265',
      vendorProject: 'Samsung',
      product: 'Mobile Devices',
      vulnerabilityName: 'Samsung Mobile Devices Use-After-Free Vulnerability',
      dateAdded: '2023-09-18',
      shortDescription:
        'Samsung devices with selected Exynos chipsets contain a use-after-free vulnerability that allows malicious memory write and code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://security.samsungmobile.com/securityUpdate.smsb?year=2022&month=1',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-8361',
      vendorProject: 'Realtek',
      product: 'SDK',
      vulnerabilityName: 'Realtek SDK Improper Input Validation Vulnerability',
      dateAdded: '2023-09-18',
      shortDescription:
        'Realtek SDK contains an improper input validation vulnerability in the miniigd SOAP service that allows remote attackers to execute malicious code via a crafted NewInternalClient request.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://web.archive.org/web/20150831100501/http://securityadvisories.dlink.com/security/publication.aspx?name=SAP10055',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-6884',
      vendorProject: 'Zyxel',
      product: 'EMG2926 Routers',
      vulnerabilityName:
        'Zyxel EMG2926 Routers Command Injection Vulnerability',
      dateAdded: '2023-09-18',
      shortDescription:
        'Zyxel EMG2926 routers contain a command injection vulnerability located in the diagnostic tools, specifically the nslookup function. A malicious user may exploit numerous vectors to execute malicious commands on the router, such as the ping_ip parameter to the expert/maintenance/diagnostic/nslookup URI.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-09',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.zyxel.com/global/en/support/security-advisories/zyxel-security-advisory-for-command-injection-vulnerability-in-emg2926-q10a-ethernet-cpe, https://www.zyxelguard.com/Zyxel-EOL.asp',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-3129',
      vendorProject: 'Laravel',
      product: 'Ignition',
      vulnerabilityName: 'Laravel Ignition File Upload Vulnerability',
      dateAdded: '2023-09-18',
      shortDescription:
        'Laravel Ignition contains a file upload vulnerability that allows unauthenticated remote attackers to execute malicious code due to insecure usage of file_get_contents() and file_put_contents().',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-09',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://github.com/facade/ignition/releases/tag/2.5.2',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28434',
      vendorProject: 'MinIO',
      product: 'MinIO',
      vulnerabilityName: 'MinIO Security Feature Bypass Vulnerability',
      dateAdded: '2023-09-19',
      shortDescription:
        'MinIO contains a security feature bypass vulnerability that allows an attacker to use crafted requests to bypass metadata bucket name checking and put an object into any bucket while processing `PostPolicyBucket` to conduct privilege escalation. To carry out this attack, the attacker requires credentials with `arn:aws:s3:::*` permission, as well as enabled Console API access.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://github.com/minio/minio/security/advisories/GHSA-2pxw-r47w-4p8c',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41179',
      vendorProject: 'Trend Micro',
      product: 'Apex One and Worry-Free Business Security',
      vulnerabilityName:
        'Trend Micro Apex One and Worry-Free Business Security Remote Code Execution Vulnerability',
      dateAdded: '2023-09-21',
      shortDescription:
        'Trend Micro Apex One and Worry-Free Business Security contain an unspecified vulnerability in the third-party anti-virus uninstaller that could allow an attacker to manipulate the module to conduct remote code execution. An attacker must first obtain administrative console access on the target system in order to exploit this vulnerability.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://success.trendmicro.com/dcx/s/solution/000294994?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41991',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Improper Certificate Validation Vulnerability',
      dateAdded: '2023-09-25',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS contain an improper certificate validation vulnerability that can allow a malicious app to bypass signature validation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213926, https://support.apple.com/en-us/HT213927, https://support.apple.com/en-us/HT213928, https://support.apple.com/en-us/HT213929, https://support.apple.com/en-us/HT213931',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41992',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Kernel Privilege Escalation Vulnerability',
      dateAdded: '2023-09-25',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and watchOS contain an unspecified vulnerability that allows for local privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213926, https://support.apple.com/en-us/HT213927, https://support.apple.com/en-us/HT213928, https://support.apple.com/en-us/HT213929, https://support.apple.com/en-us/HT213931, https://support.apple.com/en-us/HT213932',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41993',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Code Execution Vulnerability',
      dateAdded: '2023-09-25',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain an unspecified vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213926, https://support.apple.com/en-us/HT213927, https://support.apple.com/en-us/HT213930',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-14667',
      vendorProject: 'Red Hat',
      product: 'JBoss RichFaces Framework',
      vulnerabilityName:
        'Red Hat JBoss RichFaces Framework Expression Language Injection Vulnerability',
      dateAdded: '2023-09-28',
      shortDescription:
        'Red Hat JBoss RichFaces Framework contains an expression language injection vulnerability via the UserResource resource. A remote, unauthenticated attacker could exploit this vulnerability to execute malicious code using a chain of Java serialized objects via org.ajax4jsf.resource.UserResource$UriData.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2018-14667',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-5217',
      vendorProject: 'Google',
      product: 'Chromium libvpx',
      vulnerabilityName:
        'Google Chromium libvpx Heap Buffer Overflow Vulnerability',
      dateAdded: '2023-10-02',
      shortDescription:
        'Google Chromium libvpx contains a heap buffer overflow vulnerability in vp8 encoding that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could impact web browsers using libvpx, including but not limited to Google Chrome.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2023/09/stable-channel-update-for-desktop_27.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-4211',
      vendorProject: 'Arm',
      product: 'Mali GPU Kernel Driver',
      vulnerabilityName:
        'Arm Mali GPU Kernel Driver Use-After-Free Vulnerability',
      dateAdded: '2023-10-03',
      shortDescription:
        'Arm Mali GPU Kernel Driver contains a use-after-free vulnerability that allows a local, non-privileged user to make improper GPU memory processing operations to gain access to already freed memory.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.arm.com/Arm%20Security%20Center/Mali%20GPU%20Driver%20Vulnerabilities',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-42793',
      vendorProject: 'JetBrains',
      product: 'TeamCity',
      vulnerabilityName:
        'JetBrains TeamCity Authentication Bypass Vulnerability',
      dateAdded: '2023-10-04',
      shortDescription:
        'JetBrains TeamCity contains an authentication bypass vulnerability that allows for remote code execution on TeamCity Server.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-25',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://blog.jetbrains.com/teamcity/2023/09/critical-security-issue-affecting-teamcity-on-premises-update-to-2023-05-4-now/',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-28229',
      vendorProject: 'Microsoft',
      product: 'Windows CNG Key Isolation Service',
      vulnerabilityName:
        'Microsoft Windows CNG Key Isolation Service Privilege Escalation Vulnerability',
      dateAdded: '2023-10-04',
      shortDescription:
        'Microsoft Windows Cryptographic Next Generation (CNG) Key Isolation Service contains an unspecified vulnerability that allows an attacker to gain specific limited SYSTEM privileges.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-28229',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-22515',
      vendorProject: 'Atlassian',
      product: 'Confluence Data Center and Server',
      vulnerabilityName:
        'Atlassian Confluence Data Center and Server Broken Access Control Vulnerability',
      dateAdded: '2023-10-05',
      shortDescription:
        'Atlassian Confluence Data Center and Server contains a broken access control vulnerability that allows an attacker to create unauthorized Confluence administrator accounts and access Confluence.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable. Check all affected Confluence instances for evidence of compromise per vendor instructions and report any positive findings to CISA.',
      dueDate: '2023-10-13',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://confluence.atlassian.com/security/cve-2023-22515-privilege-escalation-vulnerability-in-confluence-data-center-and-server-1295682276.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-40044',
      vendorProject: 'Progress',
      product: 'WS_FTP Server',
      vulnerabilityName:
        'Progress WS_FTP Server Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2023-10-05',
      shortDescription:
        'Progress WS_FTP Server contains a deserialization of untrusted data vulnerability in the Ad Hoc Transfer module that allows an authenticated attacker to execute remote commands on the underlying operating system.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-26',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://community.progress.com/s/article/WS-FTP-Server-Critical-Vulnerability-September-2023',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-42824',
      vendorProject: 'Apple',
      product: 'iOS and iPadOS',
      vulnerabilityName:
        'Apple iOS and iPadOS Kernel Privilege Escalation Vulnerability',
      dateAdded: '2023-10-05',
      shortDescription:
        'Apple iOS and iPadOS contain an unspecified vulnerability that allows for local privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://support.apple.com/en-us/HT213961',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21608',
      vendorProject: 'Adobe',
      product: 'Acrobat and Reader',
      vulnerabilityName:
        'Adobe Acrobat and Reader Use-After-Free Vulnerability',
      dateAdded: '2023-10-10',
      shortDescription:
        'Adobe Acrobat and Reader contains a use-after-free vulnerability that allows for code execution in the context of the current user.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://helpx.adobe.com/security/products/acrobat/apsb23-01.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20109',
      vendorProject: 'Cisco',
      product: 'IOS and IOS XE',
      vulnerabilityName:
        'Cisco IOS and IOS XE Group Encrypted Transport VPN Out-of-Bounds Write Vulnerability',
      dateAdded: '2023-10-10',
      shortDescription:
        'Cisco IOS and IOS XE contain an out-of-bounds write vulnerability in the Group Encrypted Transport VPN (GET VPN) feature that could allow an authenticated, remote attacker who has administrative control of either a group member or a key server to execute malicious code or cause a device to crash.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-getvpn-rce-g8qR68sx',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41763',
      vendorProject: 'Microsoft',
      product: 'Skype for Business',
      vulnerabilityName:
        'Microsoft Skype for Business Privilege Escalation Vulnerability',
      dateAdded: '2023-10-10',
      shortDescription:
        'Microsoft Skype for Business contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-41763',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36563',
      vendorProject: 'Microsoft',
      product: 'WordPad',
      vulnerabilityName:
        'Microsoft WordPad Information Disclosure Vulnerability',
      dateAdded: '2023-10-10',
      shortDescription:
        'Microsoft WordPad contains an unspecified vulnerability that allows for information disclosure.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-36563',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-44487',
      vendorProject: 'IETF',
      product: 'HTTP/2',
      vulnerabilityName: 'HTTP/2 Rapid Reset Attack Vulnerability',
      dateAdded: '2023-10-10',
      shortDescription:
        'HTTP/2 contains a rapid reset vulnerability that allows for a distributed denial-of-service attack (DDoS).',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-10-31',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status.   For more information, please see: https://blog.cloudflare.com/technical-breakdown-http2-rapid-reset-ddos-attack/',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20198',
      vendorProject: 'Cisco',
      product: 'IOS XE Web UI',
      vulnerabilityName:
        'Cisco IOS XE Web UI Privilege Escalation Vulnerability',
      dateAdded: '2023-10-16',
      shortDescription:
        'Cisco IOS XE Web UI contains a privilege escalation vulnerability in the web user interface that could allow a remote, unauthenticated attacker to create an account with privilege level 15 access. The attacker can then use that account to gain control of the affected device.',
      requiredAction:
        'Verify that instances of Cisco IOS XE Web UI are in compliance with BOD 23-02 and apply mitigations per vendor instructions. For affected products (Cisco IOS XE Web UI exposed to the internet or to untrusted networks), follow vendor instructions to determine if a system may have been compromised and immediately report positive findings to CISA.',
      dueDate: '2023-10-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-xe-dublin-17121/221128-software-fix-availability-for-cisco-ios.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-4966',
      vendorProject: 'Citrix',
      product: 'NetScaler ADC and NetScaler Gateway',
      vulnerabilityName:
        'Citrix NetScaler ADC and NetScaler Gateway Buffer Overflow Vulnerability',
      dateAdded: '2023-10-18',
      shortDescription:
        'Citrix NetScaler ADC and NetScaler Gateway contain a buffer overflow vulnerability that allows for sensitive information disclosure when configured as a Gateway (VPN virtual server, ICA Proxy, CVPN, RDP Proxy) or AAA virtual server.',
      requiredAction:
        'Apply mitigations and kill all active and persistent sessions per vendor instructions [https://www.netscaler.com/blog/news/cve-2023-4966-critical-security-update-now-available-for-netscaler-adc-and-netscaler-gateway/] OR discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-08',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.netscaler.com/blog/news/cve-2023-4966-critical-security-update-now-available-for-netscaler-adc-and-netscaler-gateway/, https://support.citrix.com/article/CTX579459/netscaler-adc-and-netscaler-gateway-security-bulletin-for-cve20234966-and-cve20234967',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-20273',
      vendorProject: 'Cisco',
      product: 'Cisco IOS XE Web UI',
      vulnerabilityName: 'Cisco IOS XE Web UI Command Injection Vulnerability',
      dateAdded: '2023-10-23',
      shortDescription:
        'Cisco IOS XE contains a command injection vulnerability in the web user interface. When chained with CVE-2023-20198, the attacker can leverage the new local user to elevate privilege to root and write the implant to the file system. Cisco identified CVE-2023-20273 as the vulnerability exploited to deploy the implant. CVE-2021-1435, previously associated with the exploitation events, is no longer believed to be related to this activity.',
      requiredAction:
        'Verify that instances of Cisco IOS XE Web UI are in compliance with BOD 23-02 and apply mitigations per vendor instructions. For affected products (Cisco IOS XE Web UI exposed to the internet or to untrusted networks), follow vendor instructions to determine if a system may have been compromised and immediately report positive findings to CISA.',
      dueDate: '2023-10-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-iosxe-webui-privesc-j22SaA4z',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-5631',
      vendorProject: 'Roundcube',
      product: 'Webmail',
      vulnerabilityName:
        'Roundcube Webmail Persistent Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2023-10-26',
      shortDescription:
        'Roundcube Webmail contains a persistent cross-site scripting (XSS) vulnerability that allows a remote attacker to run malicious JavaScript code.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://roundcube.net/news/2023/10/16/security-update-1.6.4-released, https://roundcube.net/news/2023/10/16/security-updates-1.5.5-and-1.4.15',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-46748',
      vendorProject: 'F5',
      product: 'BIG-IP Configuration Utility',
      vulnerabilityName:
        'F5 BIG-IP Configuration Utility SQL Injection Vulnerability',
      dateAdded: '2023-10-31',
      shortDescription:
        'F5 BIG-IP Configuration utility contains an SQL injection vulnerability that may allow an authenticated attacker with network access through the BIG-IP management port and/or self IP addresses to execute system commands. This vulnerability can be used in conjunction with CVE-2023-46747.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://my.f5.com/manage/s/article/K000137365',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-46747',
      vendorProject: 'F5',
      product: 'BIG-IP Configuration Utility',
      vulnerabilityName:
        'F5 BIG-IP Configuration Utility Authentication Bypass Vulnerability',
      dateAdded: '2023-10-31',
      shortDescription:
        'F5 BIG-IP Configuration utility contains an authentication bypass using an alternate path or channel vulnerability due to undisclosed requests that may allow an unauthenticated attacker with network access to the BIG-IP system through the management port and/or self IP addresses to execute system commands. This vulnerability can be used in conjunction with CVE-2023-46748.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://my.f5.com/manage/s/article/K000137353',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-46604',
      vendorProject: 'Apache',
      product: 'ActiveMQ',
      vulnerabilityName:
        'Apache ActiveMQ Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2023-11-02',
      shortDescription:
        'Apache ActiveMQ contains a deserialization of untrusted data vulnerability that may allow a remote attacker with network access to a broker to run shell commands by manipulating serialized class types in the OpenWire protocol to cause the broker to instantiate any class on the classpath.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-23',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://activemq.apache.org/security-advisories.data/CVE-2023-46604-announcement.txt',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-22518',
      vendorProject: 'Atlassian',
      product: 'Confluence Data Center and Server',
      vulnerabilityName:
        'Atlassian Confluence Data Center and Server Improper Authorization Vulnerability',
      dateAdded: '2023-11-07',
      shortDescription:
        'Atlassian Confluence Data Center and Server contain an improper authorization vulnerability that can result in significant data loss when exploited by an unauthenticated attacker. There is no impact on confidentiality since the attacker cannot exfiltrate any data.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-28',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://confluence.atlassian.com/security/cve-2023-22518-improper-authorization-vulnerability-in-confluence-data-center-and-server-1311473907.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29552',
      vendorProject: 'IETF',
      product: 'Service Location Protocol (SLP)',
      vulnerabilityName:
        'Service Location Protocol (SLP) Denial-of-Service Vulnerability',
      dateAdded: '2023-11-08',
      shortDescription:
        'The Service Location Protocol (SLP) contains a denial-of-service (DoS) vulnerability that could allow an unauthenticated, remote attacker to register services and use spoofed UDP traffic to conduct a denial-of-service (DoS) attack with a significant amplification factor.',
      requiredAction:
        'Apply mitigations per vendor instructions or disable SLP service or port 427/UDP on all systems running on untrusted networks, including those directly connected to the Internet.',
      dueDate: '2023-11-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on the patching status. For more information please see https://www.bitsight.com/blog/new-high-severity-vulnerability-cve-2023-29552-discovered-service-location-protocol-slp and https://www.cisa.gov/news-events/alerts/2023/04/25/abuse-service-location-protocol-may-lead-dos-attacks.',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-47246',
      vendorProject: 'SysAid',
      product: 'SysAid Server',
      vulnerabilityName: 'SysAid Server Path Traversal Vulnerability',
      dateAdded: '2023-11-13',
      shortDescription:
        'SysAid Server (on-premises version) contains a path traversal vulnerability that leads to code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-04',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.sysaid.com/blog/service-desk/on-premise-software-security-vulnerability-notification',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36844',
      vendorProject: 'Juniper',
      product: 'Junos OS',
      vulnerabilityName:
        'Juniper Junos OS EX Series PHP External Variable Modification Vulnerability',
      dateAdded: '2023-11-13',
      shortDescription:
        'Juniper Junos OS on EX Series contains a PHP external variable modification vulnerability that allows an unauthenticated, network-based attacker to control certain, important environment variables. Using a crafted request an attacker is able to modify certain PHP environment variables, leading to partial loss of integrity, which may allow chaining to other vulnerabilities.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportportal.juniper.net/s/article/2023-08-Out-of-Cycle-Security-Bulletin-Junos-OS-SRX-Series-and-EX-Series-Multiple-vulnerabilities-in-J-Web-can-be-combined-to-allow-a-preAuth-Remote-Code-Execution?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36845',
      vendorProject: 'Juniper',
      product: 'Junos OS',
      vulnerabilityName:
        'Juniper Junos OS EX Series and SRX Series PHP External Variable Modification Vulnerability',
      dateAdded: '2023-11-13',
      shortDescription:
        'Juniper Junos OS on EX Series and SRX Series contains a PHP external variable modification vulnerability that allows an unauthenticated, network-based attacker to control an important environment variable. Using a crafted request, which sets the variable PHPRC, an attacker is able to modify the PHP execution environment allowing the injection und execution of code.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportportal.juniper.net/s/article/2023-08-Out-of-Cycle-Security-Bulletin-Junos-OS-SRX-Series-and-EX-Series-Multiple-vulnerabilities-in-J-Web-can-be-combined-to-allow-a-preAuth-Remote-Code-Execution?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36846',
      vendorProject: 'Juniper',
      product: 'Junos OS',
      vulnerabilityName:
        'Juniper Junos OS SRX Series Missing Authentication for Critical Function Vulnerability',
      dateAdded: '2023-11-13',
      shortDescription:
        "Juniper Junos OS on SRX Series contains a missing authentication for critical function vulnerability that allows an unauthenticated, network-based attacker to cause limited impact to the file system integrity. With a specific request to user.php that doesn't require authentication, an attacker is able to upload arbitrary files via J-Web, leading to a loss of integrity for a certain part of the file system, which may allow chaining to other vulnerabilities.",
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportportal.juniper.net/s/article/2023-08-Out-of-Cycle-Security-Bulletin-Junos-OS-SRX-Series-and-EX-Series-Multiple-vulnerabilities-in-J-Web-can-be-combined-to-allow-a-preAuth-Remote-Code-Execution?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36847',
      vendorProject: 'Juniper',
      product: 'Junos OS',
      vulnerabilityName:
        'Juniper Junos OS EX Series Missing Authentication for Critical Function Vulnerability',
      dateAdded: '2023-11-13',
      shortDescription:
        "Juniper Junos OS on EX Series contains a missing authentication for critical function vulnerability that allows an unauthenticated, network-based attacker to cause limited impact to the file system integrity. With a specific request to installAppPackage.php that doesn't require authentication, an attacker is able to upload arbitrary files via J-Web, leading to a loss of integrity for a certain part of the file system, which may allow chaining to other vulnerabilities.",
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportportal.juniper.net/s/article/2023-08-Out-of-Cycle-Security-Bulletin-Junos-OS-SRX-Series-and-EX-Series-Multiple-vulnerabilities-in-J-Web-can-be-combined-to-allow-a-preAuth-Remote-Code-Execution?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36851',
      vendorProject: 'Juniper',
      product: 'Junos OS',
      vulnerabilityName:
        'Juniper Junos OS SRX Series Missing Authentication for Critical Function Vulnerability',
      dateAdded: '2023-11-13',
      shortDescription:
        "Juniper Junos OS on SRX Series contains a missing authentication for critical function vulnerability that allows an unauthenticated, network-based attacker to cause limited impact to the file system integrity. With a specific request to webauth_operation.php that doesn't require authentication, an attacker is able to upload arbitrary files via J-Web, leading to a loss of integrity for a certain part of the file system, which may allow chaining to other vulnerabilities.",
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-11-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportportal.juniper.net/s/article/2023-08-Out-of-Cycle-Security-Bulletin-Junos-OS-SRX-Series-and-EX-Series-Multiple-vulnerabilities-in-J-Web-can-be-combined-to-allow-a-preAuth-Remote-Code-Execution?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36033',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Desktop Window Manager (DWM) Core Library Privilege Escalation Vulnerability',
      dateAdded: '2023-11-14',
      shortDescription:
        'Microsoft Windows Desktop Window Manager (DWM) Core Library contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-36033',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36025',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows SmartScreen Security Feature Bypass Vulnerability',
      dateAdded: '2023-11-14',
      shortDescription:
        'Microsoft Windows SmartScreen contains a security feature bypass vulnerability that could allow an attacker to bypass Windows Defender SmartScreen checks and their associated prompts.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-36025',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36036',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Cloud Files Mini Filter Driver Privilege Escalation Vulnerability',
      dateAdded: '2023-11-14',
      shortDescription:
        'Microsoft Windows Cloud Files Mini Filter Driver contains a privilege escalation vulnerability that could allow an attacker to gain SYSTEM privileges.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2023-36036',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-36584',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Mark of the Web (MOTW) Security Feature Bypass Vulnerability',
      dateAdded: '2023-11-16',
      shortDescription:
        'Microsoft Windows Mark of the Web (MOTW) contains a security feature bypass vulnerability resulting in a limited loss of integrity and availability of security features.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-36584',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-1671',
      vendorProject: 'Sophos',
      product: 'Web Appliance',
      vulnerabilityName: 'Sophos Web Appliance Command Injection Vulnerability',
      dateAdded: '2023-11-16',
      shortDescription:
        'Sophos Web Appliance contains a command injection vulnerability in the warn-proceed handler that allows for remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.sophos.com/en-us/security-advisories/sophos-sa-20230404-swa-rce',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-2551',
      vendorProject: 'Oracle',
      product: 'Fusion Middleware',
      vulnerabilityName: 'Oracle Fusion Middleware Unspecified Vulnerability',
      dateAdded: '2023-11-16',
      shortDescription:
        'Oracle Fusion Middleware contains an unspecified vulnerability in the WLS Core Components that allows an unauthenticated attacker with network access via IIOP to compromise the WebLogic Server.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.oracle.com/security-alerts/cpujan2020.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-4911',
      vendorProject: 'GNU',
      product: 'GNU C Library',
      vulnerabilityName: 'GNU C Library Buffer Overflow Vulnerability',
      dateAdded: '2023-11-21',
      shortDescription:
        "GNU C Library's dynamic loader ld.so contains a buffer overflow vulnerability when processing the GLIBC_TUNABLES environment variable, allowing a local attacker to execute code with elevated privileges.",
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://sourceware.org/git/?p=glibc.git;a=commitdiff;h=1056e5b4c3f2d90ed2b4a55f96add28da2f4c8fa, https://access.redhat.com/security/cve/cve-2023-4911, https://www.debian.org/security/2023/dsa-5514',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-6345',
      vendorProject: 'Google',
      product: 'Chromium Skia',
      vulnerabilityName: 'Google Skia Integer Overflow Vulnerability',
      dateAdded: '2023-11-30',
      shortDescription:
        'Google Chromium Skia contains an integer overflow vulnerability that allows a remote attacker, who has compromised the renderer process, to potentially perform a sandbox escape via a malicious file. This vulnerability affects Google Chrome and ChromeOS, Android, Flutter, and possibly other products.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://chromereleases.googleblog.com/2023/11/stable-channel-update-for-desktop_28.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-49103',
      vendorProject: 'ownCloud',
      product: 'ownCloud graphapi',
      vulnerabilityName:
        'ownCloud graphapi Information Disclosure Vulnerability',
      dateAdded: '2023-11-30',
      shortDescription:
        'ownCloud graphapi contains an information disclosure vulnerability that can reveal sensitive data stored in phpinfo() via GetPhpInfo.php, including administrative credentials.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://owncloud.com/security-advisories/disclosure-of-sensitive-credentials-and-configuration-in-containerized-deployments/',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-42917',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Memory Corruption Vulnerability',
      dateAdded: '2023-12-04',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain a memory corruption vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT214031, https://support.apple.com/en-us/HT214032, https://support.apple.com/en-us/HT214033',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-42916',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Out-of-Bounds Read Vulnerability',
      dateAdded: '2023-12-04',
      shortDescription:
        'Apple iOS, iPadOS, macOS, and Safari WebKit contain an out-of-bounds read vulnerability that may disclose sensitive information when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT214031, https://support.apple.com/en-us/HT214032, https://support.apple.com/en-us/HT214033',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-33107',
      vendorProject: 'Qualcomm',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Integer Overflow Vulnerability',
      dateAdded: '2023-12-05',
      shortDescription:
        'Multiple Qualcomm chipsets contain an integer overflow vulnerability due to memory corruption in Graphics Linux while assigning shared virtual memory region during IOCTL call.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://git.codelinaro.org/clo/la/kernel/msm-4.19/-/commit/d66b799c804083ea5226cfffac6d6c4e7ad4968b',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-33106',
      vendorProject: 'Qualcomm',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Use of Out-of-Range Pointer Offset Vulnerability',
      dateAdded: '2023-12-05',
      shortDescription:
        'Multiple Qualcomm chipsets contain a use of out-of-range pointer offset vulnerability due to memory corruption in Graphics while submitting a large list of sync points in an AUX command to the IOCTL_KGSL_GPU_AUX_COMMAND.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://git.codelinaro.org/clo/la/kernel/msm-4.19/-/commit/1e46e81dbeb69aafd5842ce779f07e617680fd58',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-33063',
      vendorProject: 'Qualcomm',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Use-After-Free Vulnerability',
      dateAdded: '2023-12-05',
      shortDescription:
        'Multiple Qualcomm chipsets contain a use-after-free vulnerability due to memory corruption in DSP Services during a remote call from HLOS to DSP.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://git.codelinaro.org/clo/la/kernel/msm-5.15/-/commit/2643808ddbedfaabbb334741873fb2857f78188a, https://git.codelinaro.org/clo/la/kernel/msm-4.14/-/commit/d43222efda5a01c9804d74a541e3c1be9b7fe110',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22071',
      vendorProject: 'Qualcomm',
      product: 'Multiple Chipsets',
      vulnerabilityName:
        'Qualcomm Multiple Chipsets Use-After-Free Vulnerability',
      dateAdded: '2023-12-05',
      shortDescription:
        'Multiple Qualcomm chipsets contain a use-after-free vulnerability when process shell memory is freed using IOCTL munmap call and process initialization is in progress.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://git.codelinaro.org/clo/la/kernel/msm-5.4/-/commit/586840fde350d7b8563df9889c8ce397e2c20dda',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41266',
      vendorProject: 'Qlik',
      product: 'Sense',
      vulnerabilityName: 'Qlik Sense Path Traversal Vulnerability',
      dateAdded: '2023-12-07',
      shortDescription:
        'Qlik Sense contains a path traversal vulnerability that allows a remote, unauthenticated attacker to create an anonymous session by sending maliciously crafted HTTP requests. This anonymous session could allow the attacker to send further requests to unauthorized endpoints.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-28',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://community.qlik.com/t5/Official-Support-Articles/Critical-Security-fixes-for-Qlik-Sense-Enterprise-for-Windows/ta-p/2110801',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41265',
      vendorProject: 'Qlik',
      product: 'Sense',
      vulnerabilityName: 'Qlik Sense HTTP Tunneling Vulnerability',
      dateAdded: '2023-12-07',
      shortDescription:
        'Qlik Sense contains an HTTP tunneling vulnerability that allows an attacker to escalate privileges and execute HTTP requests on the backend server hosting the software.',
      requiredAction:
        'Apply remediations or mitigations per vendor instructions or discontinue use of the product if remediation or mitigations are unavailable.',
      dueDate: '2023-12-28',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://community.qlik.com/t5/Official-Support-Articles/Critical-Security-fixes-for-Qlik-Sense-Enterprise-for-Windows/ta-p/2110801',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-6448',
      vendorProject: 'Unitronics',
      product: 'Vision PLC and HMI',
      vulnerabilityName:
        'Unitronics Vision PLC and HMI Insecure Default Password Vulnerability',
      dateAdded: '2023-12-11',
      shortDescription:
        'Unitronics Vision Series PLCs and HMIs ship with an insecure default password, which if left unchanged, can allow attackers to execute remote commands.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2023-12-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'Note that while it is possible to change the default password, implementors are encouraged to remove affected controllers from public networks and update the affected firmware: https://downloads.unitronicsplc.com/Sites/plc/Technical_Library/Unitronics-Cybersecurity-Advisory-2023-001-CVE-2023-6448.pdf',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-49897',
      vendorProject: 'FXC',
      product: 'AE1021, AE1021PE',
      vulnerabilityName:
        'FXC AE1021, AE1021PE OS Command Injection Vulnerability',
      dateAdded: '2023-12-21',
      shortDescription:
        'FXC AE1021 and AE1021PE contain an OS command injection vulnerability that allows authenticated users to execute commands via a network.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-11',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.fxc.jp/news/20231206',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-47565',
      vendorProject: 'QNAP',
      product: 'VioStor NVR',
      vulnerabilityName: 'QNAP VioStor NVR OS Command Injection Vulnerability',
      dateAdded: '2023-12-21',
      shortDescription:
        'QNAP VioStar NVR contains an OS command injection vulnerability that allows authenticated users to execute commands via a network.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-11',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.qnap.com/en/security-advisory/qsa-23-48',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-7101',
      vendorProject: 'Spreadsheet::ParseExcel',
      product: 'Spreadsheet::ParseExcel',
      vulnerabilityName:
        'Spreadsheet::ParseExcel Remote Code Execution Vulnerability',
      dateAdded: '2024-01-02',
      shortDescription:
        'Spreadsheet::ParseExcel contains a remote code execution vulnerability due to passing unvalidated input from a file into a string-type \u201ceval\u201d. Specifically, the issue stems from the evaluation of Number format strings within the Excel parsing logic.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        "This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://metacpan.org/dist/Spreadsheet-ParseExcel and Barracuda's specific implementation and fix for their downstream issue CVE-2023-7102 at https://www.barracuda.com/company/legal/esg-vulnerability",
      cwes: [],
    },
    {
      cveID: 'CVE-2023-7024',
      vendorProject: 'Google',
      product: 'Chromium WebRTC',
      vulnerabilityName:
        'Google Chromium WebRTC Heap Buffer Overflow Vulnerability',
      dateAdded: '2024-01-02',
      shortDescription:
        'Google Chromium WebRTC, an open-source project providing web browsers with real-time communication, contains a heap buffer overflow vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could impact web browsers using WebRTC, including but not limited to Google Chrome.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://chromereleases.googleblog.com/2023/12/stable-channel-update-for-desktop_20.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-23752',
      vendorProject: 'Joomla!',
      product: 'Joomla!',
      vulnerabilityName: 'Joomla! Improper Access Control Vulnerability',
      dateAdded: '2024-01-08',
      shortDescription:
        'Joomla! contains an improper access control vulnerability that allows unauthorized access to webservice endpoints.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.joomla.org/security-centre/894-20230201-core-improper-access-check-in-webservice-endpoints.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2016-20017',
      vendorProject: 'D-Link',
      product: 'DSL-2750B Devices',
      vulnerabilityName:
        'D-Link DSL-2750B Devices Command Injection Vulnerability',
      dateAdded: '2024-01-08',
      shortDescription:
        'D-Link DSL-2750B devices contain a command injection vulnerability that allows remote, unauthenticated command injection via the login.cgi cli parameter.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportannouncement.us.dlink.com/announcement/publication.aspx?name=SAP10088',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-41990',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName: 'Apple Multiple Products Code Execution Vulnerability',
      dateAdded: '2024-01-08',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and watchOS contain an unspecified vulnerability that allows for code execution when processing a font file.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213599, https://support.apple.com/en-us/HT213601, https://support.apple.com/en-us/HT213605, https://support.apple.com/en-us/HT213606, https://support.apple.com/en-us/HT213842, https://support.apple.com/en-us/HT213844, https://support.apple.com/en-us/HT213845',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-27524',
      vendorProject: 'Apache',
      product: 'Superset',
      vulnerabilityName:
        'Apache Superset Insecure Default Initialization of Resource Vulnerability',
      dateAdded: '2024-01-08',
      shortDescription:
        'Apache Superset contains an insecure default initialization of a resource vulnerability that allows an attacker to authenticate and access unauthorized resources on installations that have not altered the default configured SECRET_KEY according to installation instructions.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://lists.apache.org/thread/n0ftx60sllf527j7g11kmt24wvof8xyk',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29300',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2024-01-08',
      shortDescription:
        'Adobe ColdFusion contains a deserialization of untrusted data vulnerability that allows for code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://helpx.adobe.com/security/products/coldfusion/apsb23-40.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-38203',
      vendorProject: 'Adobe',
      product: 'ColdFusion',
      vulnerabilityName:
        'Adobe ColdFusion Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2024-01-08',
      shortDescription:
        'Adobe ColdFusion contains a deserialization of untrusted data vulnerability that allows for code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-29',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://helpx.adobe.com/security/products/coldfusion/apsb23-41.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29357',
      vendorProject: 'Microsoft',
      product: 'SharePoint Server',
      vulnerabilityName:
        'Microsoft SharePoint Server Privilege Escalation Vulnerability',
      dateAdded: '2024-01-10',
      shortDescription:
        'Microsoft SharePoint Server contains an unspecified vulnerability that allows an unauthenticated attacker, who has gained access to spoofed JWT authentication tokens, to use them for executing a network attack. This attack bypasses authentication, enabling the attacker to gain administrator privileges.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-31',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-29357',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-46805',
      vendorProject: 'Ivanti',
      product: 'Connect Secure and Policy Secure',
      vulnerabilityName:
        'Ivanti Connect Secure and Policy Secure Authentication Bypass Vulnerability',
      dateAdded: '2024-01-10',
      shortDescription:
        'Ivanti Connect Secure (ICS, formerly known as Pulse Connect Secure) and Ivanti Policy Secure gateways contain an authentication bypass vulnerability in the web component that allows an attacker to access restricted resources by bypassing control checks. This vulnerability can be leveraged in conjunction with CVE-2024-21887, a command injection vulnerability.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'Please apply mitigations per vendor instructions. For more information, please see: https://forums.ivanti.com/s/article/KB-CVE-2023-46805-Authentication-Bypass-CVE-2024-21887-Command-Injection-for-Ivanti-Connect-Secure-and-Ivanti-Policy-Secure-Gateways?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21887',
      vendorProject: 'Ivanti',
      product: 'Connect Secure and Policy Secure',
      vulnerabilityName:
        'Ivanti Connect Secure and Policy Secure Command Injection Vulnerability',
      dateAdded: '2024-01-10',
      shortDescription:
        'Ivanti Connect Secure (ICS, formerly known as Pulse Connect Secure) and Ivanti Policy Secure contain a command injection vulnerability in the web components of these products, which can allow an authenticated administrator to send crafted requests to execute code on affected appliances. This vulnerability can be leveraged in conjunction with CVE-2023-46805, an authenticated bypass issue.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'Please apply mitigations per vendor instructions. For more information, please see: https://forums.ivanti.com/s/article/KB-CVE-2023-46805-Authentication-Bypass-CVE-2024-21887-Command-Injection-for-Ivanti-Connect-Secure-and-Ivanti-Policy-Secure-Gateways?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2018-15133',
      vendorProject: 'Laravel',
      product: 'Laravel Framework',
      vulnerabilityName:
        'Laravel Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2024-01-16',
      shortDescription:
        'Laravel Framework contains a deserialization of untrusted data vulnerability, allowing for remote command execution. This vulnerability may only be exploited if a malicious user has accessed the application encryption key (APP_KEY environment variable).',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://laravel.com/docs/5.6/upgrade#upgrade-5.6.30',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-0519',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName:
        'Google Chromium V8 Out-of-Bounds Memory Access Vulnerability',
      dateAdded: '2024-01-17',
      shortDescription:
        'Google Chromium V8 Engine contains an out-of-bounds memory access vulnerability that allows a remote attacker to potentially exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2024/01/stable-channel-update-for-desktop_16.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-6549',
      vendorProject: 'Citrix',
      product: 'NetScaler ADC and NetScaler Gateway',
      vulnerabilityName:
        'Citrix NetScaler ADC and NetScaler Gateway Buffer Overflow Vulnerability',
      dateAdded: '2024-01-17',
      shortDescription:
        'Citrix NetScaler ADC and NetScaler Gateway contain a buffer overflow vulnerability that allows for a denial-of-service when configured as a Gateway (VPN virtual server, ICA Proxy, CVPN, RDP Proxy) or AAA virtual server.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.citrix.com/article/CTX584986/netscaler-adc-and-netscaler-gateway-security-bulletin-for-cve20236548-and-cve20236549',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-6548',
      vendorProject: 'Citrix',
      product: 'NetScaler ADC and NetScaler Gateway',
      vulnerabilityName:
        'Citrix NetScaler ADC and NetScaler Gateway Code Injection Vulnerability',
      dateAdded: '2024-01-17',
      shortDescription:
        'Citrix NetScaler ADC and NetScaler Gateway contain a code injection vulnerability that allows for authenticated remote code execution on the management interface with access to NSIP, CLIP, or SNIP.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-01-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.citrix.com/article/CTX584986/netscaler-adc-and-netscaler-gateway-security-bulletin-for-cve20236548-and-cve20236549',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-35082',
      vendorProject: 'Ivanti',
      product: 'Endpoint Manager Mobile (EPMM) and MobileIron Core',
      vulnerabilityName:
        'Ivanti Endpoint Manager Mobile (EPMM) and MobileIron Core Authentication Bypass Vulnerability',
      dateAdded: '2024-01-18',
      shortDescription:
        'Ivanti Endpoint Manager Mobile (EPMM) and MobileIron Core contain an authentication bypass vulnerability that allows unauthorized users to access restricted functionality or resources of the application.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-08',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://forums.ivanti.com/s/article/CVE-2023-35082-Remote-Unauthenticated-API-Access-Vulnerability-in-MobileIron-Core-11-2-and-older',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-34048',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName:
        'VMware vCenter Server Out-of-Bounds Write Vulnerability',
      dateAdded: '2024-01-22',
      shortDescription:
        'VMware vCenter Server contains an out-of-bounds write vulnerability in the implementation of the DCERPC protocol that allows an attacker to conduct remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-12',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.vmware.com/security/advisories/VMSA-2023-0023.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-23222',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products WebKit Type Confusion Vulnerability',
      dateAdded: '2024-01-23',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and Safari WebKit contain a type confusion vulnerability that leads to code execution when processing maliciously crafted web content. This vulnerability could impact HTML parsers that use WebKit, including but not limited to Apple Safari and non-Apple products which rely on WebKit for HTML processing.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT214055,  https://support.apple.com/en-us/HT214056, https://support.apple.com/en-us/HT214057, https://support.apple.com/en-us/HT214058, https://support.apple.com/en-us/HT214059, https://support.apple.com/en-us/HT214061, https://support.apple.com/en-us/HT214063',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-22527',
      vendorProject: 'Atlassian',
      product: 'Confluence Data Center and Server',
      vulnerabilityName:
        'Atlassian Confluence Data Center and Server Template Injection Vulnerability',
      dateAdded: '2024-01-24',
      shortDescription:
        'Atlassian Confluence Data Center and Server contain an unauthenticated OGNL template injection vulnerability that can lead to remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-14',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://confluence.atlassian.com/security/cve-2023-22527-rce-remote-code-execution-vulnerability-in-confluence-data-center-and-confluence-server-1333990257.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-48618',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2024-01-31',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and watchOS contain a time-of-check/time-of-use (TOCTOU) memory corruption vulnerability that allows an attacker with read and write capabilities to bypass Pointer Authentication.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT213530, https://support.apple.com/en-us/HT213532, https://support.apple.com/en-us/HT213535, https://support.apple.com/en-us/HT213536',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21893',
      vendorProject: 'Ivanti',
      product: 'Connect Secure, Policy Secure, and Neurons',
      vulnerabilityName:
        'Ivanti Connect Secure, Policy Secure, and Neurons Server-Side Request Forgery (SSRF) Vulnerability',
      dateAdded: '2024-01-31',
      shortDescription:
        'Ivanti Connect Secure (ICS, formerly known as Pulse Connect Secure), Ivanti Policy Secure, and Ivanti Neurons contain a server-side request forgery (SSRF) vulnerability in the SAML component that allows an attacker to access certain restricted resources without authentication.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://forums.ivanti.com/s/article/KB-CVE-2023-46805-Authentication-Bypass-CVE-2024-21887-Command-Injection-for-Ivanti-Connect-Secure-and-Ivanti-Policy-Secure-Gateways?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-4762',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2024-02-06',
      shortDescription:
        'Google Chromium V8 contains a type confusion vulnerability that allows a remote attacker to execute code via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2023/09/stable-channel-update-for-desktop.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21762',
      vendorProject: 'Fortinet',
      product: 'FortiOS',
      vulnerabilityName: 'Fortinet FortiOS Out-of-Bound Write Vulnerability',
      dateAdded: '2024-02-09',
      shortDescription:
        'Fortinet FortiOS contains an out-of-bound write vulnerability that allows a remote unauthenticated attacker to execute code or commands via specially crafted HTTP requests.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-16',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://fortiguard.fortinet.com/psirt/FG-IR-24-015',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-43770',
      vendorProject: 'Roundcube',
      product: 'Webmail',
      vulnerabilityName:
        'Roundcube Webmail Persistent Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2024-02-12',
      shortDescription:
        'Roundcube Webmail contains a persistent cross-site scripting (XSS) vulnerability that can lead to information disclosure via malicious link references in plain/text messages.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://roundcube.net/news/2023/09/15/security-update-1.6.3-released',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21412',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Internet Shortcut Files Security Feature Bypass Vulnerability',
      dateAdded: '2024-02-13',
      shortDescription:
        'Microsoft Windows Internet Shortcut Files contains an unspecified vulnerability that allows for a security feature bypass.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2024-21412',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21351',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows SmartScreen Security Feature Bypass Vulnerability',
      dateAdded: '2024-02-13',
      shortDescription:
        'Microsoft Windows SmartScreen contains a security feature bypass vulnerability that allows an attacker to bypass the SmartScreen user experience and inject code to potentially gain code execution, which could lead to some data exposure, lack of system availability, or both.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2024-21351',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-3259',
      vendorProject: 'Cisco',
      product:
        'Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD)',
      vulnerabilityName:
        'Cisco ASA and FTD Information Disclosure Vulnerability',
      dateAdded: '2024-02-15',
      shortDescription:
        'Cisco Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD) contain an information disclosure vulnerability. An attacker could retrieve memory contents on an affected device, which could lead to the disclosure of confidential information due to a buffer tracking issue when the software parses invalid URLs that are requested from the web services interface. This vulnerability affects only specific AnyConnect and WebVPN configurations.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-07',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-info-disclose-9eJtycMB',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21410',
      vendorProject: 'Microsoft',
      product: 'Exchange Server',
      vulnerabilityName:
        'Microsoft Exchange Server Privilege Escalation Vulnerability',
      dateAdded: '2024-02-15',
      shortDescription:
        'Microsoft Exchange Server contains an unspecified vulnerability that allows for privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-21410',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-1709',
      vendorProject: 'ConnectWise',
      product: 'ScreenConnect',
      vulnerabilityName:
        'ConnectWise ScreenConnect Authentication Bypass Vulnerability',
      dateAdded: '2024-02-22',
      shortDescription:
        'ConnectWise ScreenConnect contains an authentication bypass vulnerability that allows an attacker with network access to the management interface to create a new, administrator-level account on affected devices.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-02-29',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.connectwise.com/company/trust/security-bulletins/connectwise-screenconnect-23.9.8',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-29360',
      vendorProject: 'Microsoft',
      product: 'Streaming Service',
      vulnerabilityName:
        'Microsoft Streaming Service Untrusted Pointer Dereference Vulnerability',
      dateAdded: '2024-02-29',
      shortDescription:
        'Microsoft Streaming Service contains an untrusted pointer dereference vulnerability that allows for privilege escalation, enabling a local attacker to gain SYSTEM privileges.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-29360',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-21338',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Kernel Exposed IOCTL with Insufficient Access Control Vulnerability',
      dateAdded: '2024-03-04',
      shortDescription:
        'Microsoft Windows Kernel contains an exposed IOCTL with insufficient access control vulnerability within the IOCTL (input and output control) dispatcher in appid.sys that allows a local attacker to achieve privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-21338',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-21237',
      vendorProject: 'Android',
      product: 'Pixel',
      vulnerabilityName: 'Android Pixel Information Disclosure Vulnerability ',
      dateAdded: '2024-03-05',
      shortDescription:
        'Android Pixel contains a vulnerability in the Framework component, where the UI may be misleading or insufficient, providing a means to hide a foreground service notification. This could enable a local attacker to disclose sensitive information.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://source.android.com/docs/security/bulletin/pixel/2023-06-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-36380',
      vendorProject: 'Sunhillo',
      product: 'SureLine',
      vulnerabilityName: 'Sunhillo SureLine OS Command Injection Vulnerablity',
      dateAdded: '2024-03-05',
      shortDescription:
        'Sunhillo SureLine contains an OS command injection vulnerability that allows an attacker to cause a denial-of-service or utilize the device for persistence on the network via shell metacharacters in ipAddr or dnsAddr in /cgi/networkDiag.cgi.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-26',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.sunhillo.com/fb011/',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-23225',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2024-03-06',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, watchOS, and visionOS kernel contain a memory corruption vulnerability that allows an attacker with arbitrary kernel read and write capability to bypass kernel memory protections.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT214081, https://support.apple.com/en-us/HT214082, https://support.apple.com/en-us/HT214083, https://support.apple.com/en-us/HT214084, https://support.apple.com/en-us/HT214085, https://support.apple.com/en-us/HT214086, https://support.apple.com/en-us/HT214087, https://support.apple.com/en-us/HT214088',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-23296',
      vendorProject: 'Apple',
      product: 'Multiple Products',
      vulnerabilityName:
        'Apple Multiple Products Memory Corruption Vulnerability',
      dateAdded: '2024-03-06',
      shortDescription:
        'Apple iOS, iPadOS, macOS, tvOS, and watchOS RTKit contain a memory corruption vulnerability that allows an attacker with arbitrary kernel read and write capability to bypass kernel memory protections.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-27',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.apple.com/en-us/HT214081, https://support.apple.com/en-us/HT214082, https://support.apple.com/en-us/HT214084, https://support.apple.com/en-us/HT214086, https://support.apple.com/en-us/HT214088  ',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-27198',
      vendorProject: 'JetBrains',
      product: 'TeamCity',
      vulnerabilityName:
        'JetBrains TeamCity Authentication Bypass Vulnerability',
      dateAdded: '2024-03-07',
      shortDescription:
        'JetBrains TeamCity contains an authentication bypass vulnerability that allows an attacker to perform admin actions.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-03-28',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://www.jetbrains.com/help/teamcity/teamcity-2023-11-4-release-notes.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2019-7256',
      vendorProject: 'Nice',
      product: 'Linear eMerge E3-Series',
      vulnerabilityName:
        'Nice Linear eMerge E3-Series OS Command Injection Vulnerability',
      dateAdded: '2024-03-25',
      shortDescription:
        'Nice Linear eMerge E3-Series contains an OS command injection vulnerability that allows an attacker to conduct remote code execution.',
      requiredAction:
        'Contact the vendor for guidance on remediating firmware, per their advisory.',
      dueDate: '2024-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://linear-solutions.com/wp-content/uploads/E3-Bulletin-06-27-2023.pdf, https://www.cisa.gov/news-events/ics-advisories/icsa-24-065-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-44529',
      vendorProject: 'Ivanti',
      product: 'Endpoint Manager Cloud Service Appliance (EPM CSA)',
      vulnerabilityName:
        'Ivanti Endpoint Manager Cloud Service Appliance (EPM CSA) Code Injection Vulnerability ',
      dateAdded: '2024-03-25',
      shortDescription:
        'Ivanti Endpoint Manager Cloud Service Appliance (EPM CSA) contains a code injection vulnerability that allows an unauthenticated user to execute malicious code with limited permissions (nobody).',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-04-15',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://forums.ivanti.com/s/article/SA-2021-12-02?language=en_US',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-48788',
      vendorProject: 'Fortinet',
      product: 'FortiClient EMS',
      vulnerabilityName: 'Fortinet FortiClient EMS SQL Injection Vulnerability',
      dateAdded: '2024-03-25',
      shortDescription:
        'Fortinet FortiClient EMS contains a SQL injection vulnerability that allows an unauthenticated attacker to execute commands as SYSTEM via specifically crafted requests.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-04-15',
      knownRansomwareCampaignUse: 'Known',
      notes: 'https://www.fortiguard.com/psirt/FG-IR-24-007',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-24955',
      vendorProject: 'Microsoft',
      product: 'SharePoint Server',
      vulnerabilityName:
        'Microsoft SharePoint Server Code Injection Vulnerability',
      dateAdded: '2024-03-26',
      shortDescription:
        'Microsoft SharePoint Server contains a code injection vulnerability that allows an authenticated attacker with Site Owner privileges to execute code remotely.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-04-16',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-24955',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-29748',
      vendorProject: 'Android',
      product: 'Pixel',
      vulnerabilityName: 'Android Pixel Privilege Escalation Vulnerability',
      dateAdded: '2024-04-04',
      shortDescription:
        'Android Pixel contains a privilege escalation vulnerability that allows an attacker to interrupt a factory reset triggered by a device admin app.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-04-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://source.android.com/docs/security/bulletin/pixel/2024-04-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-29745',
      vendorProject: 'Android',
      product: 'Pixel',
      vulnerabilityName: 'Android Pixel Information Disclosure Vulnerability',
      dateAdded: '2024-04-04',
      shortDescription:
        'Android Pixel contains an information disclosure vulnerability in the fastboot firmware used to support unlocking, flashing, and locking affected devices.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-04-25',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://source.android.com/docs/security/bulletin/pixel/2024-04-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-3273',
      vendorProject: 'D-Link',
      product: 'Multiple NAS Devices',
      vulnerabilityName:
        'D-Link Multiple NAS Devices Command Injection Vulnerability',
      dateAdded: '2024-04-11',
      shortDescription:
        'D-Link DNS-320L, DNS-325, DNS-327L, and DNS-340L contain a command injection vulnerability. When combined with CVE-2024-3272, this can lead to remote, unauthorized code execution.',
      requiredAction:
        'This vulnerability affects legacy D-Link products. All associated hardware revisions have reached their end-of-life (EOL) or end-of-service (EOS) life cycle and should be retired and replaced per vendor instructions.',
      dueDate: '2024-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportannouncement.us.dlink.com/security/publication.aspx?name=SAP10383',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-3272',
      vendorProject: 'D-Link',
      product: 'Multiple NAS Devices',
      vulnerabilityName:
        'D-Link Multiple NAS Devices Use of Hard-Coded Credentials Vulnerability',
      dateAdded: '2024-04-11',
      shortDescription:
        'D-Link DNS-320L, DNS-325, DNS-327L, and DNS-340L contains a hard-coded credential that allows an attacker to conduct authenticated command injection, leading to remote, unauthorized code execution.',
      requiredAction:
        'This vulnerability affects legacy D-Link products. All associated hardware revisions have reached their end-of-life (EOL) or end-of-service (EOS) life cycle and should be retired and replaced per vendor instructions.',
      dueDate: '2024-05-02',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://supportannouncement.us.dlink.com/security/publication.aspx?name=SAP10383',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-3400',
      vendorProject: 'Palo Alto Networks',
      product: 'PAN-OS',
      vulnerabilityName:
        'Palo Alto Networks PAN-OS Command Injection Vulnerability',
      dateAdded: '2024-04-12',
      shortDescription:
        'Palo Alto Networks PAN-OS GlobalProtect feature contains a command injection vulnerability that allows an unauthenticated attacker to execute commands with root privileges on the firewall.',
      requiredAction:
        'Apply mitigations per vendor instructions as they become available. Otherwise, users with vulnerable versions of affected devices should enable Threat Prevention IDs available from the vendor. See the vendor bulletin for more details and a patch release schedule.',
      dueDate: '2024-04-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security.paloaltonetworks.com/CVE-2024-3400',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-38028',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Print Spooler Privilege Escalation Vulnerability ',
      dateAdded: '2024-04-23',
      shortDescription:
        'Microsoft Windows Print Spooler service contains a privilege escalation vulnerability. An attacker may modify a JavaScript constraints file and execute it with SYSTEM-level permissions.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-05-14',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-38028',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4040',
      vendorProject: 'CrushFTP',
      product: 'CrushFTP',
      vulnerabilityName: 'CrushFTP VFS Sandbox Escape Vulnerability',
      dateAdded: '2024-04-24',
      shortDescription:
        'CrushFTP contains an unspecified sandbox escape vulnerability that allows a remote attacker to escape the CrushFTP virtual file system (VFS).',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-05-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.crushftp.com/crush11wiki/Wiki.jsp?page=Update&version=34',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-20359',
      vendorProject: 'Cisco',
      product:
        'Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD)',
      vulnerabilityName: 'Cisco ASA and FTD Privilege Escalation Vulnerability',
      dateAdded: '2024-04-24',
      shortDescription:
        'Cisco Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD) contain a privilege escalation vulnerability that can allow local privilege escalation from Administrator to root.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-05-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-persist-rce-FLsNXF4h',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-20353',
      vendorProject: 'Cisco',
      product:
        'Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD)',
      vulnerabilityName: 'Cisco ASA and FTD Denial of Service Vulnerability',
      dateAdded: '2024-04-24',
      shortDescription:
        'Cisco Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD) contain an infinite loop vulnerability that can lead to remote denial of service condition.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-05-01',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-websrvs-dos-X8gNucD2',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-29988',
      vendorProject: 'Microsoft',
      product: 'SmartScreen Prompt',
      vulnerabilityName:
        'Microsoft SmartScreen Prompt Security Feature Bypass Vulnerability',
      dateAdded: '2024-04-30',
      shortDescription:
        'Microsoft SmartScreen Prompt contains a security feature bypass vulnerability that allows an attacker to bypass the Mark of the Web (MotW) feature. This vulnerability can be chained with CVE-2023-38831 and CVE-2024-21412 to execute a malicious file.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-05-21',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-29988',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-7028',
      vendorProject: 'GitLab',
      product: 'GitLab CE/EE',
      vulnerabilityName:
        'GitLab Community and Enterprise Editions Improper Access Control Vulnerability',
      dateAdded: '2024-05-01',
      shortDescription:
        'GitLab Community and Enterprise Editions contain an improper access control vulnerability. This allows an attacker to trigger password reset emails to be sent to an unverified email address to ultimately facilitate an account takeover.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-05-22',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://about.gitlab.com/releases/2024/01/11/critical-security-release-gitlab-16-7-2-released/',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4671',
      vendorProject: 'Google',
      product: 'Chromium',
      vulnerabilityName: 'Google Chromium Visuals Use-After-Free Vulnerability',
      dateAdded: '2024-05-13',
      shortDescription:
        'Google Chromium Visuals contains a use-after-free vulnerability that allows a remote attacker to exploit heap corruption via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2024/05/stable-channel-update-for-desktop_9.html?m=1',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-30040',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows MSHTML Platform Security Feature Bypass Vulnerability',
      dateAdded: '2024-05-14',
      shortDescription:
        'Microsoft Windows MSHTML Platform contains an unspecified vulnerability that allows for a security feature bypass.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-30040',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-30051',
      vendorProject: 'Microsoft',
      product: 'DWM Core Library',
      vulnerabilityName:
        ' Microsoft DWM Core Library Privilege Escalation Vulnerability',
      dateAdded: '2024-05-14',
      shortDescription:
        'Microsoft DWM Core Library contains a privilege escalation vulnerability that allows an attacker to gain SYSTEM privileges.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-30051',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4761',
      vendorProject: 'Google',
      product: 'Chromium Visuals',
      vulnerabilityName:
        'Google Chromium V8 Out-of-Bounds Memory Write Vulnerability',
      dateAdded: '2024-05-16',
      shortDescription:
        'Google Chromium V8 Engine contains an unspecified out-of-bounds memory write vulnerability via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera. ',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2024/05/stable-channel-update-for-desktop_13.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2021-40655',
      vendorProject: 'D-Link',
      product: 'DIR-605 Router',
      vulnerabilityName:
        'D-Link DIR-605 Router Information Disclosure Vulnerability',
      dateAdded: '2024-05-16',
      shortDescription:
        'D-Link DIR-605 routers contain an information disclosure vulnerability that allows attackers to obtain a username and password by forging a post request to the /getcfg.php page. ',
      requiredAction:
        'This vulnerability affects legacy D-Link products. All associated hardware revisions have reached their end-of-life (EOL) or end-of-service (EOS) life cycle and should be retired and replaced per vendor instructions.',
      dueDate: '2024-06-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://legacy.us.dlink.com/pages/product.aspx?id=2b09e95d90ff4cb38830ecc04c89cee5',
      cwes: [],
    },
    {
      cveID: 'CVE-2014-100005',
      vendorProject: 'D-Link',
      product: 'DIR-600 Router',
      vulnerabilityName:
        'D-Link DIR-600 Router Cross-Site Request Forgery (CSRF) Vulnerability',
      dateAdded: '2024-05-16',
      shortDescription:
        'D-Link DIR-600 routers contain a cross-site request forgery (CSRF) vulnerability that allows an attacker to change router configurations by hijacking an existing administrator session.',
      requiredAction:
        'This vulnerability affects legacy D-Link products. All associated hardware revisions have reached their end-of-life (EOL) or end-of-service (EOS) life cycle and should be retired and replaced per vendor instructions.',
      dueDate: '2024-06-06',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://legacy.us.dlink.com/pages/product.aspx?id=4587b63118524aec911191cc81605283',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4947',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2024-05-20',
      shortDescription:
        'Google Chromium V8 contains a type confusion vulnerability that allows a remote attacker to execute code via a crafted HTML page.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2024/05/stable-channel-update-for-desktop_15.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-43208',
      vendorProject: 'NextGen Healthcare',
      product: 'Mirth Connect',
      vulnerabilityName:
        'NextGen Healthcare Mirth Connect Deserialization of Untrusted Data Vulnerability',
      dateAdded: '2024-05-20',
      shortDescription:
        'NextGen Healthcare Mirth Connect contains a deserialization of untrusted data vulnerability that allows for unauthenticated remote code execution via a specially crafted request.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-10',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status.   For more information, please see: https://github.com/nextgenhealthcare/connect/wiki/4.4.1---What%27s-New',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-17519',
      vendorProject: 'Apache',
      product: 'Flink',
      vulnerabilityName: 'Apache Flink Improper Access Control Vulnerability',
      dateAdded: '2024-05-23',
      shortDescription:
        'Apache Flink contains an improper access control vulnerability that allows an attacker to read any file on the local filesystem of the JobManager through its REST interface.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://lists.apache.org/thread/typ0h03zyfrzjqlnb7plh64df1g2383d',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-5274',
      vendorProject: 'Google',
      product: 'Chromium V8',
      vulnerabilityName: 'Google Chromium V8 Type Confusion Vulnerability',
      dateAdded: '2024-05-28',
      shortDescription:
        'Google Chromium V8 contains a type confusion vulnerability that allows a remote attacker to execute code via a crafted HTML page. This vulnerability could affect multiple web browsers that utilize Chromium, including, but not limited to, Google Chrome, Microsoft Edge, and Opera.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-18',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://chromereleases.googleblog.com/2024/05/stable-channel-update-for-desktop_23.html?m=1',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4978',
      vendorProject: 'Justice AV Solutions',
      product: 'Viewer ',
      vulnerabilityName:
        'Justice AV Solutions (JAVS) Viewer Installer Embedded Malicious Code Vulnerability',
      dateAdded: '2024-05-29',
      shortDescription:
        'Justice AV Solutions (JAVS) Viewer installer contains a malicious version of ffmpeg.exe, named fffmpeg.exe (SHA256: 421a4ad2615941b177b6ec4ab5e239c14e62af2ab07c6df1741e2a62223223c4). When run, this creates a backdoor connection to a malicious C2 server.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'Please follow the vendor\u2019s instructions as outlined in the public statements at https://www.rapid7.com/blog/post/2024/05/23/cve-2024-4978-backdoored-justice-av-solutions-viewer-software-used-in-apparent-supply-chain-attack#remediation and https://www.javs.com/downloads',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-1086',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Use-After-Free Vulnerability',
      dateAdded: '2024-05-30',
      shortDescription:
        'Linux kernel contains a use-after-free vulnerability in the netfilter: nf_tables component that allows an attacker to achieve local privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see: https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f342de4e2f33e0e39165d8639387aa6c19dff660',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-24919',
      vendorProject: 'Check Point',
      product: 'Quantum Security Gateways',
      vulnerabilityName:
        'Check Point Quantum Security Gateways Information Disclosure Vulnerability',
      dateAdded: '2024-05-30',
      shortDescription:
        'Check Point Quantum Security Gateways contain an unspecified information disclosure vulnerability. The vulnerability potentially allows an attacker to access information on Gateways connected to the internet, with IPSec VPN, Remote Access VPN or Mobile Access enabled. This issue affects several product lines from Check Point, including CloudGuard Network, Quantum Scalable Chassis, Quantum Security Gateways, and Quantum Spark Appliances.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-20',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://support.checkpoint.com/results/sk/sk182336',
      cwes: [],
    },
    {
      cveID: 'CVE-2017-3506',
      vendorProject: 'Oracle',
      product: 'WebLogic Server',
      vulnerabilityName:
        'Oracle WebLogic Server OS Command Injection Vulnerability',
      dateAdded: '2024-06-03',
      shortDescription:
        'Oracle WebLogic Server, a product within the Fusion Middleware suite, contains an OS command injection vulnerability that allows an attacker to execute arbitrary code via a specially crafted HTTP request that includes a malicious XML document.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-06-24',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.oracle.com/security-alerts/cpuapr2017.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4577',
      vendorProject: 'PHP Group',
      product: 'PHP',
      vulnerabilityName: 'PHP-CGI OS Command Injection Vulnerability',
      dateAdded: '2024-06-12',
      shortDescription:
        'PHP, specifically Windows-based PHP used in CGI mode, contains an OS command injection vulnerability that allows for arbitrary code execution. This vulnerability is a patch bypass for CVE-2012-1823.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-03',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. Please check with specific vendors for information on patching status. For more information, please see:  https://www.php.net/ChangeLog-8.php#',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4610',
      vendorProject: 'Arm',
      product: 'Mali GPU Kernel Driver',
      vulnerabilityName:
        'Arm Mali GPU Kernel Driver Use-After-Free Vulnerability',
      dateAdded: '2024-06-12',
      shortDescription:
        'Arm Bifrost and Valhall GPU kernel drivers contain a use-after-free vulnerability that allows a local, non-privileged user to make improper GPU memory processing operations to gain access to already freed memory.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-03',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://developer.arm.com/Arm%20Security%20Center/Mali%20GPU%20Driver%20Vulnerabilities',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4358',
      vendorProject: 'Progress',
      product: 'Telerik Report Server',
      vulnerabilityName:
        'Progress Telerik Report Server Authentication Bypass by Spoofing Vulnerability',
      dateAdded: '2024-06-13',
      shortDescription:
        'Progress Telerik Report Server contains an authorization bypass by spoofing vulnerability that allows an attacker to obtain unauthorized access.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://docs.telerik.com/report-server/knowledge-base/registration-auth-bypass-cve-2024-4358',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-26169',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows Error Reporting Service Improper Privilege Management Vulnerability',
      dateAdded: '2024-06-13',
      shortDescription:
        'Microsoft Windows Error Reporting Service contains an improper privilege management vulnerability that allows a local attacker with user permissions to gain SYSTEM privileges.',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2024-07-04',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-26169',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-32896',
      vendorProject: 'Android',
      product: 'Pixel',
      vulnerabilityName: 'Android Pixel Privilege Escalation Vulnerability',
      dateAdded: '2024-06-13',
      shortDescription:
        'Android Pixel contains an unspecified vulnerability in the firmware that allows for privilege escalation.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-04',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://source.android.com/docs/security/bulletin/pixel/2024-06-01',
      cwes: [],
    },
    {
      cveID: 'CVE-2020-13965',
      vendorProject: 'Roundcube',
      product: 'Webmail',
      vulnerabilityName:
        'Roundcube Webmail Cross-Site Scripting (XSS) Vulnerability',
      dateAdded: '2024-06-26',
      shortDescription:
        'Roundcube Webmail contains a cross-site scripting (XSS) vulnerability that allows a remote attacker to manipulate data via a malicious XML attachment.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://roundcube.net/news/2020/06/02/security-updates-1.4.5-and-1.3.12',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-2586',
      vendorProject: 'Linux',
      product: 'Kernel',
      vulnerabilityName: 'Linux Kernel Use-After-Free Vulnerability',
      dateAdded: '2024-06-26',
      shortDescription:
        'Linux Kernel contains a use-after-free vulnerability in the nft_object, allowing local attackers to escalate privileges. ',
      requiredAction:
        'Apply updates per vendor instructions or discontinue use of the product if updates are unavailable.',
      dueDate: '2024-07-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. For more information, please see: https://seclists.org/oss-sec/2022/q3/131',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-24816',
      vendorProject: 'OSGeo',
      product: 'JAI-EXT',
      vulnerabilityName: 'OSGeo GeoServer JAI-EXT Code Injection Vulnerability',
      dateAdded: '2024-06-26',
      shortDescription:
        'OSGeo GeoServer JAI-EXT contains a code injection vulnerability that, when programs use jt-jiffle and allow Jiffle script to be provided via network request, could allow remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-17',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects a common open-source component, third-party library, or a protocol used by different products. The patched JAI-EXT is version 1.1.22: https://github.com/geosolutions-it/jai-ext/releases/tag/1.1.22, https://github.com/geosolutions-it/jai-ext/security/advisories/GHSA-v92f-jx6p-73rx',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-20399',
      vendorProject: 'Cisco',
      product: 'NX-OS',
      vulnerabilityName: 'Cisco NX-OS Command Injection Vulnerability',
      dateAdded: '2024-07-02',
      shortDescription:
        'Cisco NX-OS contains a command injection vulnerability in the command line interface (CLI) that could allow an authenticated, local attacker to execute commands as root on the underlying operating system of an affected device.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-23',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-nxos-cmd-injection-xD9OhyOP',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-23692',
      vendorProject: 'Rejetto',
      product: 'HTTP File Server',
      vulnerabilityName:
        'Rejetto HTTP File Server Improper Neutralization of Special Elements Used in a Template Engine Vulnerability',
      dateAdded: '2024-07-09',
      shortDescription:
        'Rejetto HTTP File Server contains an improper neutralization of special elements used in a template engine vulnerability. This allows a remote, unauthenticated attacker to execute commands on the affected system by sending a specially crafted HTTP request.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'The patched Rejetto HTTP File Server (HFS) is version 3: https://github.com/rejetto/hfs?tab=readme-ov-file#installation, https://www.rejetto.com/hfs/',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-38080',
      vendorProject: 'Microsoft',
      product: 'Windows ',
      vulnerabilityName:
        'Microsoft Windows Hyper-V Privilege Escalation Vulnerability',
      dateAdded: '2024-07-09',
      shortDescription:
        'Microsoft Windows Hyper-V contains a privilege escalation vulnerability that allows a local attacker with user permissions to gain SYSTEM privileges.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2024-38080',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-38112',
      vendorProject: 'Microsoft',
      product: 'Windows',
      vulnerabilityName:
        'Microsoft Windows MSHTML Platform Spoofing Vulnerability',
      dateAdded: '2024-07-09',
      shortDescription:
        'Microsoft Windows MSHTML Platform contains a spoofing vulnerability that has a high impact to confidentiality, integrity, and availability.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-07-30',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-38112',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-36401',
      vendorProject: 'OSGeo',
      product: 'GeoServer',
      vulnerabilityName:
        'OSGeo GeoServer GeoTools Eval Injection Vulnerability',
      dateAdded: '2024-07-15',
      shortDescription:
        'OSGeo GeoServer GeoTools contains an improper neutralization of directives in dynamically evaluated code vulnerability due to unsafely evaluating property names as XPath expressions. This allows unauthenticated attackers to conduct remote code execution via specially crafted input.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-05',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'This vulnerability affects an open-source component, third-party library, or a protocol used by different products. For more information, please see: https://github.com/geoserver/geoserver/security/advisories/GHSA-6jj6-gm7p-fcvv, https://github.com/geotools/geotools/pull/4797',
      cwes: [],
    },
    {
      cveID: 'CVE-2022-22948',
      vendorProject: 'VMware',
      product: 'vCenter Server',
      vulnerabilityName:
        'VMware vCenter Server Incorrect Default File Permissions Vulnerability ',
      dateAdded: '2024-07-17',
      shortDescription:
        'VMware vCenter Server contains an incorrect default file permissions vulnerability that allows a remote, privileged attacker to gain access to sensitive information.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://www.vmware.com/security/advisories/VMSA-2022-0009.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-28995',
      vendorProject: 'SolarWinds',
      product: 'Serv-U',
      vulnerabilityName: 'SolarWinds Serv-U Path Traversal Vulnerability ',
      dateAdded: '2024-07-17',
      shortDescription:
        'SolarWinds Serv-U contains a path traversal vulnerability that allows an attacker access to read sensitive files on the host machine.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.solarwinds.com/trust-center/security-advisories/cve-2024-28995',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-34102',
      vendorProject: 'Adobe',
      product: 'Commerce and Magento Open Source',
      vulnerabilityName:
        'Adobe Commerce and Magento Open Source Improper Restriction of XML External Entity Reference (XXE) Vulnerability',
      dateAdded: '2024-07-17',
      shortDescription:
        'Adobe Commerce and Magento Open Source contain an improper restriction of XML external entity reference (XXE) vulnerability that allows for remote code execution.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-07',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://helpx.adobe.com/security/products/magento/apsb24-40.html',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-39891',
      vendorProject: 'Twilio',
      product: 'Authy',
      vulnerabilityName: 'Twilio Authy Information Disclosure Vulnerability',
      dateAdded: '2024-07-23',
      shortDescription:
        'Twilio Authy contains an information disclosure vulnerability in its API that allows an unauthenticated endpoint to accept a request containing a phone number and respond with information about whether the phone number was registered with Authy.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://www.twilio.com/en-us/changelog/Security_Alert_Authy_App_Android_iOS',
      cwes: [],
    },
    {
      cveID: 'CVE-2012-4792',
      vendorProject: 'Microsoft',
      product: 'Internet Explorer',
      vulnerabilityName:
        'Microsoft Internet Explorer Use-After-Free Vulnerability',
      dateAdded: '2024-07-23',
      shortDescription:
        'Microsoft Internet Explorer contains a use-after-free vulnerability that allows a remote attacker to execute arbitrary code via a crafted web site that triggers access to an object that (1) was not properly allocated or (2) is deleted, as demonstrated by a CDwnBindInfo object.',
      requiredAction:
        'The impacted product is end-of-life and should be disconnected if still in use.',
      dueDate: '2024-08-13',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://learn.microsoft.com/en-us/lifecycle/products/internet-explorer-11',
      cwes: [],
    },
    {
      cveID: 'CVE-2023-45249',
      vendorProject: 'Acronis',
      product: 'Cyber Infrastructure (ACI)',
      vulnerabilityName:
        'Acronis Cyber Infrastructure (ACI) Insecure Default Password Vulnerability',
      dateAdded: '2024-07-29',
      shortDescription:
        'Acronis Cyber Infrastructure (ACI) allows an unauthenticated user to execute commands remotely due to the use of default passwords.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes: 'https://security-advisory.acronis.com/advisories/SEC-6452',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-5217',
      vendorProject: 'ServiceNow',
      product: 'Utah, Vancouver, and Washington DC Now',
      vulnerabilityName:
        'ServiceNow Incomplete List of Disallowed Inputs Vulnerability',
      dateAdded: '2024-07-29',
      shortDescription:
        'ServiceNow Washington DC, Vancouver, and earlier Now Platform releases contain an incomplete list of disallowed inputs vulnerability in the GlideExpression script. An unauthenticated user could exploit this vulnerability to execute code remotely.',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1648313',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-4879',
      vendorProject: 'ServiceNow',
      product: 'Utah, Vancouver, and Washington DC Now',
      vulnerabilityName: 'ServiceNow Improper Input Validation Vulnerability',
      dateAdded: '2024-07-29',
      shortDescription:
        'ServiceNow Utah, Vancouver, and Washington DC Now releases contain a jelly template injection vulnerability in UI macros. An unauthenticated user could exploit this vulnerability to execute code remotely. ',
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-19',
      knownRansomwareCampaignUse: 'Unknown',
      notes:
        'https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1645154',
      cwes: [],
    },
    {
      cveID: 'CVE-2024-37085',
      vendorProject: 'VMware',
      product: 'ESXi',
      vulnerabilityName: 'VMware ESXi Authentication Bypass Vulnerability',
      dateAdded: '2024-07-30',
      shortDescription:
        "VMware ESXi contains an authentication bypass vulnerability. A malicious actor with sufficient Active Directory (AD) permissions can gain full access to an ESXi host that was previously configured to use AD for user management by re-creating the configured AD group ('ESXi Admins' by default) after it was deleted from AD.",
      requiredAction:
        'Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.',
      dueDate: '2024-08-20',
      knownRansomwareCampaignUse: 'Known',
      notes:
        'https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/24505',
      cwes: [],
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class VulnerabilitiesService {
  private http = inject<HttpClient>(HttpClient);

  public getCisaVulnerabilities(): Observable<any> {
    // TODO - move this to environment file
    const url = 'http://localhost:3333/api/cisa_vulnerabilities';
    return of(xxx);
    // return this.http.get<CisaVulnerabilities>(url);
  }
}
