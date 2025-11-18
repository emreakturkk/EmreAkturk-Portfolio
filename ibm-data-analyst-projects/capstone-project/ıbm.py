import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# -----------------------------
# Dosya
# -----------------------------
file_stackoverflow = "survey_results_public.csv"

print(f"'{file_stackoverflow}' dosyası okunuyor... (100MB+ olabilir)")
df = pd.read_csv(file_stackoverflow, low_memory=False)
print("Dosya başarıyla yüklendi.\n")

# --------------------------------------------------------------------
# Slayt 18: En Çok İstenen 10 AI Modeli
# --------------------------------------------------------------------
col_ai = 'AIModelsWantToWorkWith'
ai_data = df[col_ai].dropna().str.split(';').explode()
ai_cleaned = ai_data.str.strip()
ai_cleaned = ai_cleaned[ai_cleaned.str.len() > 0]

# Top 10 AI Model
ai_counts = ai_cleaned.value_counts().nlargest(10)

print("Slayt 18: En Çok İstenen 10 AI Modeli")
print(ai_counts)

# --- Slayt 18 Grafiği ---
plt.figure(figsize=(12, 8))
sns.barplot(x=ai_counts.values, y=ai_counts.index, palette="tab10")

# Sütunların sağında sayıları göster (DÜZELTİLMİŞ GİRİNTİ)
for i, val in enumerate(ai_counts.values):
    plt.text(val + 5, i, str(val), va='center', fontsize=10, color='black')

plt.title("Top 10 Most Desired AI Models (SO 2025 Survey)", fontsize=16)
plt.xlabel("Number of Respondents", fontsize=12)
plt.ylabel("AI Model", fontsize=12)
plt.tight_layout()
plt.savefig("Slayt_18_AI_Models.png")
plt.show()
print("Slayt 18 kaydedildi.\n")

# --------------------------------------------------------------------
# Slayt 19: En Yüksek Maaşlı 10 Dil (Median Salary)
# --- GÜNCELLENDİ: Dikey Çubuk Grafik ve Çoktan Aza Sıralama ---
# --------------------------------------------------------------------
col_lang = 'LanguageHaveWorkedWith'
col_salary = 'ConvertedCompYearly'

df_salary = df[[col_lang, col_salary]].dropna()
df_exploded = df_salary.assign(Language=df_salary[col_lang].str.split(';')).explode('Language')
df_exploded['Language'] = df_exploded['Language'].str.strip()
df_exploded = df_exploded[df_exploded['Language'].str.len() > 0]

# Grupla ve median maaş hesapla
lang_stats = df_exploded.groupby('Language')[col_salary].agg(MedianSalary='median', RespondentCount='count')

# Güvenilir diller (en az 500 yanıtlayan)
min_respondents = 500
lang_stats_filtered = lang_stats[lang_stats['RespondentCount'] >= min_respondents]

# --- DEĞİŞİKLİK 1: Sıralama (Çoktan Aza) ---
# Orijinal kodunuzda `.sort_values('MedianSalary', ascending=True)` vardı.
# Bunu kaldırdık, çünkü `.nlargest()` zaten veriyi çoktan aza (en yüksekten en düşüğe) sıralar.
top_10_paying = lang_stats_filtered.nlargest(10, 'MedianSalary')

print("Slayt 19: En Yüksek Maaşlı 10 Dil (Çoktan Aza Sıralı)")
print(top_10_paying)

# --- Slayt 19 Grafiği (Dikey Çubuk) ---
plt.figure(figsize=(12, 8))

# --- DEĞİŞİKLİK 2: Grafik Eksenleri (Dikey Grafik) ---
# x ve y eksenleri dikey çubuk grafik olacak şekilde değiştirildi.
sns.barplot(
    x=top_10_paying.index,         # EKSEN DEĞİŞTİ: Diller (X ekseni)
    y=top_10_paying['MedianSalary'], # EKSEN DEĞİŞTİ: Maaş (Y ekseni)
    palette="viridis_r"              # Renk paletini tersine çevirdim (en yüksek yeşil olsun diye)
)

# --- DEĞİŞİKLİK 3: Metin Konumları (Dikey Grafik) ---
# Maaşları sütunların *üstüne* yazmak için x, y konumları ve hizalama (ha, va) güncellendi.
for i, row in enumerate(top_10_paying.itertuples()):
    plt.text(
        i,                          # x-konumu (çubuğun merkezi)
        row.MedianSalary + 1000,      # y-konumu (çubuğun biraz üstü)
        f"${int(row.MedianSalary):,}",
        ha='center',                # Yatayda ortala
        va='bottom',                # Dikeyde alta hizala
        fontsize=10, color='black'
    )

plt.title("Top 10 Highest Paying Programming Languages (SO 2025 Survey, N >= 500)", fontsize=16)

# --- DEĞİŞİKLİK 4: Eksen Başlıkları ---
# Eksen başlıkları dikey grafiğe göre güncellendi.
plt.xlabel("Programming Language", fontsize=12)
plt.ylabel("Median Yearly Salary (USD)", fontsize=12)

# --- DEĞİŞİKLİK 5 (ÖNEMLİ): Dil İsimlerini Döndürme ---
# X eksenindeki dil isimlerinin (Ruby, Perl, vb.) birbiriyle çakışmaması için
# yazıları 45 derece döndürdük.
plt.xticks(rotation=45, ha='right', fontsize=10)


plt.tight_layout()
# Dosya adını değiştirdim ki eski grafiğinizin üzerine yazmasın
plt.savefig("Slayt_19_Highest_Paying_Languages_Vertical.png")
plt.show()
print("Slayt 19 (Dikey Grafik) kaydedildi.\n")