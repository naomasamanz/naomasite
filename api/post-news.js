export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { pass, text } = req.body;

    // 1. 環境変数の照合
    if (pass === process.env.BROADCAST_PASS) {
        try {
            // 2. Firebase REST API を叩いて Firestore に直接書き込む！
            // プロジェクトID「naoma-lab」の「news」コレクションへ
            const firebaseResponse = await fetch(`https://firestore.googleapis.com/v1/projects/naoma-lab/databases/(default)/documents/news`, {
                method: 'POST',
                body: JSON.stringify({
                    fields: {
                        text: { stringValue: text },
                        timestamp: { timestampValue: new Date().toISOString() }
                    }
                })
            });

            if (!firebaseResponse.ok) throw new Error('Firebaseへの書き込みに失敗しました');

            return res.status(200).json({ success: true, message: "完了しました。" });
        } catch (e) {
            return res.status(500).json({ success: false, message: "エラー: " + e.message });
        }
    } else {
        return res.status(401).json({ success: false, message: "合言葉が違います。" });
    }
}
