import re
import os # YENI: Klasör yollarını bulmak için gerekli modül

def raporu_olustur():
    # Bu script dosyasinin oldugu klasoru buluyoruz (Burası en önemli kısım)
    scriptin_bulundugu_yer = os.path.dirname(os.path.abspath(__file__))
    
    # Tam dosya yolunu birlestiriyoruz (Klasör Yolu + Dosya Adı)
    dosya_yolu = os.path.join(scriptin_bulundugu_yer, "server_log.txt")

    bilgi_sayisi = 0 
    hata_sayisi = 0  
    hata_sozlugu = {}

    print(f"--- Islem Baslatiliyor... ---\n")
    print(f"Okunan Dosya Yolu: {dosya_yolu}\n") # Kontrol için yolu yazdıralım

    try:
        with open(dosya_yolu, "r") as f:
            for satir in f:
                if re.search(r"ERROR", satir):
                    hata_sayisi += 1
                    bulunan_hata = re.search(r"ERROR: ([\w ]*) ", satir)
                    
                    if bulunan_hata:
                        hata_mesaji = bulunan_hata.group(1)
                        hata_sozlugu[hata_mesaji] = hata_sozlugu.get(hata_mesaji, 0) + 1
                        print(f"-> Hata tespit edildi: {hata_mesaji}")

                elif re.search(r"INFO", satir):
                    bilgi_sayisi += 1

        print("\n" + "*"*30)
        print("GENEL DURUM RAPORU")
        print("*"*30)
        print(f"Toplam Bilgilendirme (INFO): {bilgi_sayisi}")
        print(f"Toplam Kritik Hata (ERROR): {hata_sayisi}")
        print("-" * 30)
        
        print("Sık Yasanan Hatalar:")
        for hata, adet in hata_sozlugu.items():
            print(f"- {hata} -> {adet} kere tekrarlandi.")

    except FileNotFoundError:
        print("HATA: Dosya hala bulunamadi!")
        print(f"Python su adrese bakiyor: {dosya_yolu}")
        print("Lutfen 'server_log.txt' dosyasinin bu klasorde oldugundan emin ol.")

if __name__ == "__main__":
    raporu_olustur()