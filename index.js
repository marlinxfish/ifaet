const a0_0x3fa83b=a0_0x396e;(function(_0x1d1666,_0x450171){const _0x20a7fe=a0_0x396e,_0x1373bd=_0x1d1666();while(!![]){try{const _0x1b4ead=-parseInt(_0x20a7fe(0x20d))/0x1+parseInt(_0x20a7fe(0x20c))/0x2*(parseInt(_0x20a7fe(0x207))/0x3)+-parseInt(_0x20a7fe(0x220))/0x4+parseInt(_0x20a7fe(0x204))/0x5+parseInt(_0x20a7fe(0x21d))/0x6+-parseInt(_0x20a7fe(0x219))/0x7*(-parseInt(_0x20a7fe(0x200))/0x8)+parseInt(_0x20a7fe(0x226))/0x9*(-parseInt(_0x20a7fe(0x214))/0xa);if(_0x1b4ead===_0x450171)break;else _0x1373bd['push'](_0x1373bd['shift']());}catch(_0x324a8f){_0x1373bd['push'](_0x1373bd['shift']());}}}(a0_0x1cca,0xb4ffd));const clear=require(a0_0x3fa83b(0x225)),chalk=require('chalk'),privateKeys=require(a0_0x3fa83b(0x21f)),{checkIn,getPoints}=require(a0_0x3fa83b(0x227)),{getBalance,deposit}=require(a0_0x3fa83b(0x1f9)),banner=require(a0_0x3fa83b(0x1fd));function a0_0x396e(_0x272252,_0x5dcd90){const _0x1cca99=a0_0x1cca();return a0_0x396e=function(_0x396e17,_0x120b94){_0x396e17=_0x396e17-0x1f3;let _0x3f2915=_0x1cca99[_0x396e17];return _0x3f2915;},a0_0x396e(_0x272252,_0x5dcd90);}async function sleep(_0x38cc28){const _0x44f12a=a0_0x3fa83b;for(let _0x1fbcd2=_0x38cc28;_0x1fbcd2>=0x0;_0x1fbcd2--){process[_0x44f12a(0x21a)][_0x44f12a(0x213)](chalk[_0x44f12a(0x20e)](_0x44f12a(0x1fa)+_0x1fbcd2+_0x44f12a(0x221))),await new Promise(_0x155929=>setTimeout(_0x155929,0x3e8));}console[_0x44f12a(0x1f6)](chalk['greenBright']('\x0a🚀\x20Memulai\x20proses\x20kembali...\x0a'));}function a0_0x1cca(){const _0x3eafae=['redBright','⏳\x20Wrap\x20sedang\x20diproses...','log','address','Unknown\x20error','./service/wrap','\x0d⏳\x20Menunggu\x20','\x20WETH','magentaBright','./utils/banner','⏳\x20Check-in\x20berikutnya\x20dalam\x20','blueBright','155408JNtaTf','\x20detik...','cyan','WPOL','4105090NMJCjg','POL','\x20ETH','741414Wnalqf','❌\x20Gagal\x20\x20(Anda\x20Sudah\x20Check-in\x20Sebelumnya)','yellow','✅\x20Wrap:\x20','error','4fRtpzx','98543VghGSE','yellowBright','floor','\x20\x20\x20⭐\x20Poin\x20\x20\x20:\x20','\x20dari\x20','success','write','3962890OqrPIT','❌\x20Gagal\x20\x20(','greenBright','random','⏳\x20Check-in\x20sedang\x20diproses...','217HWdhPx','stdout','\x20:\x20','------------------------------------------------------------------------','596862jNKRuR','💰\x20Balance:','./privateKey.json','3123088PPifpx','\x20detik...\x20','\x20\x20\x20🟣\x20POL\x20\x20\x20:\x20','✅\x20Check-in:\x20','length','clear','9XaaydQ','./service/checkin','txHash'];a0_0x1cca=function(){return _0x3eafae;};return a0_0x1cca();}async function runBot(){const _0x3bbaca=a0_0x3fa83b;clear(),console[_0x3bbaca(0x1f6)](chalk['cyanBright'](banner));for(let _0x296a02=0x0;_0x296a02<privateKeys[_0x3bbaca(0x224)];_0x296a02++){const _0x68d9cc=privateKeys[_0x296a02],_0x1f034e=await getBalance(_0x68d9cc),_0x191e02=_0x1f034e[_0x3bbaca(0x205)]||'0',_0x1d4402=_0x1f034e[_0x3bbaca(0x203)]||'0',_0x243fb9=await getPoints(_0x1f034e['address']),_0x599df6=typeof _0x243fb9==='number'?chalk[_0x3bbaca(0x1fc)](''+_0x243fb9):chalk[_0x3bbaca(0x1f4)](_0x3bbaca(0x215)+_0x243fb9[_0x3bbaca(0x20b)]+')');console[_0x3bbaca(0x1f6)](chalk['blueBright']('🔹\x20Akun\x20'+(_0x296a02+0x1)+_0x3bbaca(0x211)+privateKeys[_0x3bbaca(0x224)]+_0x3bbaca(0x21b)+_0x1f034e[_0x3bbaca(0x1f7)])),console[_0x3bbaca(0x1f6)](chalk[_0x3bbaca(0x202)]('========================================')),console['log'](chalk['greenBright'](_0x3bbaca(0x21e))),console['log'](_0x3bbaca(0x222)+chalk['yellowBright'](_0x191e02)+_0x3bbaca(0x206)),console['log']('\x20\x20\x20🔵\x20WPOL\x20\x20:\x20'+chalk[_0x3bbaca(0x1ff)](_0x1d4402)+_0x3bbaca(0x1fb)),console[_0x3bbaca(0x1f6)](_0x3bbaca(0x210)+_0x599df6),console[_0x3bbaca(0x1f6)](chalk[_0x3bbaca(0x202)](_0x3bbaca(0x21c))),console['log'](chalk[_0x3bbaca(0x209)](_0x3bbaca(0x218)));const _0x7faee0=await checkIn(_0x68d9cc),_0x386902=_0x7faee0[_0x3bbaca(0x212)]?chalk['greenBright']('✅\x20Berhasil'):chalk[_0x3bbaca(0x1f4)](_0x3bbaca(0x208));console[_0x3bbaca(0x1f6)](_0x3bbaca(0x223)+_0x386902),console[_0x3bbaca(0x1f6)](chalk[_0x3bbaca(0x209)](_0x3bbaca(0x1f5)));const _0x5b47c0=await deposit(_0x68d9cc),_0x49d68b=_0x5b47c0[_0x3bbaca(0x1f3)]?chalk[_0x3bbaca(0x216)]('✅\x20Berhasil\x20\x20(🔗\x20https://polygonscan.com/tx/'+_0x5b47c0[_0x3bbaca(0x1f3)]+')'):chalk[_0x3bbaca(0x1f4)]('❌\x20Gagal\x20\x20('+(_0x5b47c0['error']||_0x3bbaca(0x1f8))+')');console[_0x3bbaca(0x1f6)](_0x3bbaca(0x20a)+_0x49d68b),console[_0x3bbaca(0x1f6)](chalk[_0x3bbaca(0x202)]('========================================\x0a'));}const _0x1803d9=Math['floor'](Math[_0x3bbaca(0x217)]()*(0x17c-0x168+0x1)+0x168)*0x3c,_0x919fea=Math[_0x3bbaca(0x20f)](Math[_0x3bbaca(0x217)]()*(0x5dc-0x5a0+0x1)+0x5a0)*0x3c;console[_0x3bbaca(0x1f6)](chalk['greenBright']('🕒\x20Menunggu\x20check-in\x20dan\x20wrap\x20berikutnya...\x0a')),console[_0x3bbaca(0x1f6)](chalk[_0x3bbaca(0x20e)](_0x3bbaca(0x1fe)+_0x1803d9+_0x3bbaca(0x201))),await sleep(_0x1803d9),runBot();}runBot();