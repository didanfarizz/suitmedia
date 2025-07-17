const generateDummyArticles = (count) => {
    const articles = [];
    const baseDate = new Date('2022-09-05T10:00:00Z'); 
    for (let i = 1; i <= count; i++) {
        const date = new Date(baseDate.getTime() - (i * 24 * 60 * 60 * 1000)); 
        const title = i % 2 === 0
            ? "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer..."
            : "Kenali Tingkatan Influencers berdasarkan Jumlah \nFollowers";
        const imageUrl = i % 2 === 0
            ? "/sosmed.jpg" // 
            : "/influencer.jpg"; // 

        articles.push({
            id: i,
            title: title,
            date: date.toISOString(), 
            imageUrl: imageUrl, 
            author: "Admin",
            description: "Deskripsi singkat artikel ini...",
        });
    }
    return articles;
};

export const articles = generateDummyArticles(100);