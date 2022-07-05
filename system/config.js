// Owner number
global.owner = '212690516633'
// Owner name
global.owner_name = 'Bella mohamed'
// Maximum upload file size limit (Default : 250 MB)
global.max_upload = 1000
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 10)
global.limit = 20
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92']
// Put target jid to forward friends story
global.forwards = '212690516633@c.us'
// Get neoxr apikey by registering at https://api.nxr.my.id
global.Api = new (require('./neoxrApi'))('q7nMK1')
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'إنتظر قليلا ... 😌'),
   invalid: Func.texted('bold', 'الرابط مكاينش 😕'),
   wrong: Func.texted('bold', 'كتابة خاطئة 😑'),
   getdata: Func.texted('bold', 'تسنا شوية'),
   fail: Func.texted('bold', ' 🤣🤣 ملقيت والو هه'),
   error: Func.texted('bold', 'خطأ 😟'),
   errorF: Func.texted('bold', 'Sorry this feature is in error.'),
   premium: Func.texted('bold', 'هذه الخاصية متاحة فقط للمستعملين ڤ.آي.بي'),
   owner: Func.texted('bold', 'هذه الخاصية متاحة فقط الادمن '),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'هذه الخاصية متاحة فقط داخل المجموعات'),
   botAdmin: Func.texted('bold', 'هذه الخاصية متاحة فقط عندما أصبح أدمن'),
   admin: Func.texted('bold', 'This command only for group admin.'),
   private: Func.texted('bold', 'Use this command in private chat.')
})
