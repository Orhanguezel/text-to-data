const text = `

product:Lenovo X200
product text:Small, reparable, classic laptop with great ports
specifications:
    cpu: Intel Core 2 Duo T9600
    installed memory: 2x 4GB DDR3-1066
    storage: 128GB SSD
current price: 500

`;

function parseTextToObject(text) {
    const lines = text.trim().split("\n"); // Metni satırlara böl
    const result = {}; // Sonuç nesnesi
    

    // Boşlukları kaldırıp ikinci kelimeyi büyük harfle yazan yardımcı fonksiyon
    function formatKey(key) {
        return key
            .split(" ") // Kelimeleri boşluklardan ayır
            .map((word, index) => 
                index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(""); // Kelimeleri birleştirerek camelCase formata getir
    }
    
    let i = 0;
    
    while (i < lines.length) {
        let line = lines[i].trim(); // Satırın başındaki ve sonundaki boşlukları temizle

        // Boş satırları geç
        if (line === "") {
            i++;
            continue;
        }

        // Anahtar ve değeri ayır
        const colonIndex = line.indexOf(":"); // İlk ":" karakterinin indeksini bul
        if (colonIndex === -1) {
            i++;
            continue; // Eğer ":" bulunamazsa geç
        }

        const key = formatKey(line.substring(0, colonIndex).trim()); // ":" öncesini anahtar olarak al ve formatla
        const value = line.substring(colonIndex + 1).trim(); // ":" sonrasını değer olarak al

        // Eğer value boşsa iç nesne olarak ele al
        if (value === "") {
            result[key] = {}; // İç nesne oluştur
            i++;

            // Girintili satırları iç nesneye ekle
            while (i < lines.length && lines[i].startsWith("    ")) {
                let nestedLine = lines[i].trim(); // Girintili satırı temizle
                
                const nestedColonIndex = nestedLine.indexOf(":"); // İlk ":" indeksini bul
                if (nestedColonIndex === -1) {
                    i++;
                    continue; // Eğer ":" bulunamazsa geç
                }

                const nestedKey = formatKey(nestedLine.substring(0, nestedColonIndex).trim()); // Anahtar kısmını al ve formatla
                const nestedValue = nestedLine.substring(nestedColonIndex + 1).trim(); // Değer kısmını al

                result[key][nestedKey] = nestedValue; // İç nesneye anahtar-değer ekle
                i++;
            }
        } else {
            // Anahtar ve değeri ana nesneye ekle
            result[key] = value;
            i++;
        }
    }

    return result;
}

// Nesne olarak gösterilecek
const parsedText = parseTextToObject(text);
console.log("const text =", parsedText);
