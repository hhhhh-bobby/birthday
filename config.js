// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们",   //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "组织部的五月宝宝们",// 同上...
        "下面有请我们的第一位宝宝",
        "为洁鑫大帅锅疯狂打call",
        "生日快乐呀✨✨✨希望你接下来的日子开开心心 也能够做自己喜欢的事情 希望你想要的都拥有 一路向阳☀☀☀",
        "生而有幸，有幸而生。祝洁鑫生日快乐，一帆风顺年年好，万事如意步步高！",
        "接下来上场的是我们组织部的美媚",
        "转眼到了你在组织部的第二个生日，也就意味着组织之旅要结束了，没有想到我们都已经快退休了。",
        "真的很开心能和你还有其他两个人共事，没有想到我们能磨合得恰到好处。",
        "（肉麻……）生日到了，祝你在五月以及未来的每天每月里都开心快乐，像我的头像一样柿柿（事事）如意！",
        "追星的同时不要忘记脱单大业哦哈哈哈哈哈哈（我也是咳咳）",
        "猜猜这是谁?", //: "iCloud 云盘⁩ ▸ ⁨桌面⁩"
        "对!是天祥",  //: "⁨iCloud 云盘⁩ ▸ ⁨桌面⁩"
        "天祥做事严谨认真，是组织部的大宝藏，祝你生辰快乐，岁岁年年今朝在，日日月月乐常行。",
        "生日快乐，希望在新的一年你的枕头更加柔软，美梦也无比美满！",
        "生命是快乐的，生日是幸福的，快乐的生命里有你幸福的生日，是最最烂漫温馨的。",
        "我让短信带去我给你的祝福，天祥，愿你永远年轻，今生永保美好！",
        "我们感谢五月",
        "让可爱的你们来到这个世界上",
        "从而让我们能够与你们相遇",
        "祝你们在新的一岁中",
        "开开心心,身体健康,保持可爱!",
        "成长道路",
        "组织部与你相伴而行",
        "From 煮鸡部百万秀发群~",
        "MUA~~诚意满满的祝福已经送达，建议你收藏微信永存哦",
     
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我们": "./imgs/zzb_20200425124839.jpg",
        "为洁鑫大帅锅疯狂打call": "./imgs/jie.jpg.jpg",
        "接下来上场的是我们组织部的美媚": "./imgs/微信图片_20200426211825.jpg",
        "猜猜这是谁?": "./imgs/txx.jpg",
        "对!是天祥": "./imgs/tianxd.jpg",
        "成长道路": "./imgs/微信图片_20200426212529.jpg",
         "组织部与你相伴而行": "./imgs/微信图片_20200426212534.jpg",
         "From 煮鸡部百万秀发群~": "./imgs/微信图片_20200426212519.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "装饰?",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "祝五月宝宝生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
