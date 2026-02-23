// /api/post-news.js
export default async function handler(req, res) {
    // 1. 城主からの通信のみを受け付ける（POSTメソッド限定）
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '形式が違います（Method Not Allowed）' });
    }

    const { pass, text } = req.body;

    // 2. Vercelの金庫（環境変数）に封印した「BROADCAST_PASS」と照合！
    // ここで GitHub には一切合言葉を書かずに済みますぞ！！
    if (pass === process.env.BROADCAST_PASS) {
        // ★本来はここでFirebaseへ送信しますが、まずは「照合成功」をテストしましょう
        return res.status(200).json({ success: true, message: "正しい合言葉を確認しました。" });
    } else {
        return res.status(401).json({ success: false, message: "合言葉が違います。" });
    }
}
