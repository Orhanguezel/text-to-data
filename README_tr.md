### Görev: Verilen Metni Bir Nesneye Dönüştür

**Adımlar:**

1. Metni satırlara bölün.

2. `lines` dizisindeki her satır için:
   - Eğer satır boşsa, döngünün bir sonraki iterasyonuna geçin.

3. Satırları işle:
    - `:` ile iki parçaya ayırarak `key` ve `value` olarak belirleyin.
    - `key` ve `value`'daki tüm baştaki ve sondaki boşlukları kaldırın.
  
4. Eğer `value` boşsa:
    - İç içe bir nesne ile çalışıyorsunuz demektir.
    - Ana nesnede `key` adıyla boş bir nesne oluşturun.

5. Eğer bir sonraki satır dört boşluk ile girintilendiyse:
    - Bir sonraki satırı “:” ile ikiye ayırarak `nestedKey` ve `nestedValue` olarak belirleyin.
    - `nestedKey` ve `nestedValue`'daki tüm boşlukları kaldırın.
    - `nestedKey` ve `nestedValue`'yi iç içe nesneye ekleyin.
    - Bir sonraki satıra geçin.

6. Aksi takdirde, `key` ve `value`'yi ana nesneye ekleyin.