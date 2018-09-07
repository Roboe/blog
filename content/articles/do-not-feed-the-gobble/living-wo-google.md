# Holding back Android™ & fixing AOSP

## Liberate your phone from Google

### Android is not free software

They have fooled you. Android is **not open source**, even. Just like Google Chrome and Chromium, Android was anounced by Google as an open source product, but the real open source product is AOSP, not the **commercial** Android OS. This was a master marketing movement that, together with using the Linux kernel, drawed the attention of geeky people and the OSS community.

### Differences between Android and AOSP

Android is based on the AOSP, but adds a variety of proprietary software. This added non-free software is called [**Google Mobile Services**](https://en.wikipedia.org/wiki/Google_mobile_services) (GMS, commonly known as GApps) and consist in [a bunch of apps and libraries](https://github.com/opengapps/opengapps/wiki/Package-Comparison) to interact with Google services.

This suite includes:

- **Google Play Store**: the only official appstore. Good luck searching for apps outside this centralized market, conveniently ruled by Google.
- **Google sync adapters**: for syncing contacts and calendar with your Google account.
- **Google location services**: used by the system for quick network location and _fused_ location (network + GPS).
- **GMail**, **Google Now/Assistant**, **Google Chrome**, **YouTube**, **Google Maps**, Google Music, Google Drive/Docs... everything Google _Something_.

### One suite to rule them all

One of the biggest issues with GMS is that they are integrated into the system. They don't need to ask you permission for **anything**. In fact, they can avoid the [Android permissions model](http://www.vogella.com/tutorials/AndroidPermissions/article.html). In the past, around Q3 2012, Google Play Store [forcibly deployed Google Play Services](http://forums.whirlpool.net.au/archive/1987336) on all Android devices in the world, without asking anybody to accept, no matter what were your available space in disk **or your will** uninstalling it, it kept reviving.

That was my personal epiphany. I didn't control my own phone, Google did. Something was **absolutely wrong** with that. I payed for my phone, not rented it. I was running even a custom ROM with root access!

### You have no superuser rights

Unlike desktop OSes, mobile OSes only expose a normal user account to the _owner_ with privileged applications that let you install software, turn on and configure hardware like WiFi and Bluetooth, take screenshots, setting a VPN, etc. The real administrator account (`root` in Android, because is based on Linux) is **blocked**. You need to _root_ your phone in order to access this account, which is generally* an unsupported and hacky process different for every phone model and Android version. This post won't cover _rooting_.

[More on the Android's Security Model, relative to Linux's Security Model]

*= Prerooted phones: Fairphone 1, (...). Official rooted ROM: [Fairphone 2](https://code.fairphone.com/projects/fp-osos/index.html), [OnePlus One](https://forums.oneplus.net/threads/official-4-4-4-oneplus-aosp.65482/), (...)

### Google controls your phone

http://blogs.fsfe.org/larma/2017/signal-backdoors/





### MicroG spoofing signatures

https://blogs.fsfe.org/larma/2016/microg-signature-spoofing-security/



---

> Un pueblo dispuesto a sacrificar un poco de libertad a cambio de un poco de seguridad no meree ni una ni otra. Y acaba perdiendo las dos.

Benjamín Franklin

> El uso del terror con fines políticos viene de antiguo. Aunque no tanto, pues no hay terrorismo sin medios de comunicación de masas que amplifiquen el efecto del miedo colectivo

Ignacio Ramonet, _El imperio de la vigilancia_

---

(Sorry, this post is going to be very extensive)

(I think I'll be finishing this post tomorrow. You have NoGApps and microG info on their respective topics, linked at the bottom)


OpenGApps, GApps (GMS) and Android/AOSP
===

I have a disagreement with the name OpenGApps from the first day I heard/red it because of its confusion-prone constitution. [OpenGApps](https://github.com/opengapps/opengapps) are just **flashable ZIPs** of different sizes with the apps and services of the **Google Mobile Services** (GMS) suite, useful for flashing on top of custom ROMs, which cannot include them by default for licensing issues (_extra_: this side _effect_ cause benefit for FOSS philosophy, independence and privacy at the end).

The [GMS](https://www.google.com/mobile/) suite is commonly named _GApps_ or _Google Apps_, is **proprietary software**, and use remote web services from Google, thus it cannot be included on [Android Open Source Project](http://source.android.com/) (AOSP). It is shipped with (almost) every comercial [Android™](http://www.android.com/) device and contain _usable_ apps (Google's Play Store, Mail, Maps, Drive, Chrome, Youtube, etc), **and** other _invisible_ apps that adds capabilities to the system (Google-backed network location, Google Maps API for embedding maps into apps, GCM push notifications and Google sign in).

The GMS suite is installed on Android as system apps. This means that, although Android base (AOSP) is open source, the reality is that there is **opaque software** (proprietary software) in your mobile running with **root permissions** and reaching 3rd party services without your clear knowledge. This can be considered a security vulnerability or a freedom cage, but mostly (for me, at least) it is a privacy concern. I cannot completely _own_ a device I've bought, nor use alternative for some of those services. Other extended reason to avoid the use of GMS is excesive energy consumption.


Living without Google
===

Using an Android device without GMS is not as easy as it can be thought. The Android™ platform is controlled by Google. Google's business model is hardly based on the use and popularization of their services, so Google encourage developers to use their own services and distribute their apps through their official store, Google Play Store. That means **some apps cannot be obtained from other sources**, and that some of those apps depend of these non-free services and cannot be used whithout them.

I've had the repetitive experience of my phone refusing to install some apps because of the need of Google Maps API installed (mostly Spanish bus information apps), or some other apps installing and closing when opened (showing a _pretty_ message: "Google Services are required and blah, blah, blah", or simply crashing), or some other apps notifications malfunctioning because the absence of GCM push services (_Slack_, which I need for working; _Tumblr_, which I _needed_ for procrastinating).


NoGApps and microG projects
===

So, if GMS are needed, but for some reason you **don't want to use it** (or not use it in its whole, only some parts), you are in a dilemma. This is the point in which NoGApps and microG comes to the rescue.

[NoGApps](http://forum.xda-developers.com/showthread.php?t=1715375) and [microG](http://forum.xda-developers.com/android/apps-games/app-microg-gmscore-floss-play-services-t3217616) are open source replacements of GMS mainly developed by [Mar-v-in](https://github.com/mar-v-in). I've been following those projects for some time (roughtly two years). My guess is that microG is a renewed version of NoGApps.

(To be continued)

---

### <a name="android-versioning">Android versioning</a>

Every Android app (i.e. a single APK) have two versions:

- One, a readable one, a text string, for users to easily understand
- Two, an integer one, the real version number. This is the version the Android Package Installer uses to reject downgrades, and the version stores like F-Droid use to broadcast updates.

What is happening here is that the version installed (1.6.7, from the F-Droid repo) is actually internally lower than the version-to-update-to (0.2.4, from the microG repo). I don't know the reason why the readable version of the F-Droid microG is 1.x.x; microG is still in development.


### <a name="android-security">Android security concerning app updates</a>

You cannot install the microG's repo one over the F-Droid's repo one because they have conflicting signatures (that is; different people have compiled it). That's an Android authoring integrity protection to avoid malware and data-theft (you should know more about this, I can read "IT Security consultant" in your profile). F-Droid is known to compile from source their shared apps: this _ensures_ the source code matches the release APK if you choose to trust F-Droid's build servers.

The solution is to uninstall the F-Droid's repo version and install the up-to-date microG's repo version (or compile it yourself from source)


### <a name="microg-vs-gms">Conflict: microG vs Google Mobile Services (GApps)</a>

microG conflicts with GApps. To fake GApps, microG apps needs two things:

- Same package signature as GApps: `com.google.android.gms` (_et al._)
- Same signing key as GApps: that's why you need to install Xposed Framework or Needle for signature spoofing.

These are needed because those apps requiring Google Services check those things before actually using them. And with microG we are trying to fake them through the same API but different implementation.

---

### One package name to rule them all

F-Droid's repo includes the UnifiedNLP Android package (APK) in three 
flavours: GApps, no GApps and no GApps legacy. Only the GApps flavour 
conflicts with Google Mobile Services.
F-Droid does **not** include microG Services Core in its own repo, you 
should add the microG's [repo](https://microg.org/download.html) for 
that.

The thing is, as I explained 
[above](https://forum.fairphone.com/t/strange-f-droid-microg-services-core-update-behaviour/22518/2?u=roboe):
 to impersonate Google Mobile Services (tricking the system or another 
apps), an app should have the same package signature as them; i.e. 
`com.android.google.gms`:

- UnifiedNLP app impersonates GApps at the system level to provide free 
  location services;
- microG Services Core app impresonates GApps at the system level and 
  for other apps, too, to provide GMS-API-compatible services, including 
  location service.
- (if GApps installed) Google Mobile Services app doesn't need to 
  impersonate itself, but uses that package name, obviously.

---

Thus, microGSC, UnifiedNLP (GApps) and Google Mobile Services **share the same package signature**, even when they are different apps, and F-Droid list them as the same app, which causes **version singularities** (UnifiedNLP is at 1.6.7, microG is at 0.2.4-xxxxxx) **and naming problems** (they often call UnifiedNLP (GApps) to the microG Services Core app, or UnifiedNLP (GApps) to the actual GApps)

P.S.: All this troubles are caused by Android and Google. We must remember that Google is [locking up Android's freedom](http://arstechnica.com/gadgets/2013/10/googles-iron-grip-on-android-controlling-open-source-by-any-means-necessary/) by outsourcing system features to their Google Mobile Services. microG tries to reverse that move and let you choose [which service](https://github.com/microg/android_packages_apps_UnifiedNlp#usage) (SaaS) you want to use, returning the control back to the user.