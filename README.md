# Bucak Isi Sistemleri

Yasir Bucak icin hazirlanmis; Afyonkarahisar genelinde dogalgaz tesisati, kombi, petek, isi pompasi ve klima bakim-onarim odakli tanitim sitesi.

## Lokal Calistirma

Bu proje saf HTML, CSS ve JavaScript ile hazirlandi. Herhangi bir paket kurmadan calistirabilirsiniz:

```bash
python3 -m http.server 8080
```

Ardindan tarayicida `http://localhost:8080` adresini acin.

## Ucretsiz Yayinlama

Bu site, public GitHub reponuzdan cekilerek Cloudflare Pages uzerinde tamamen ucretsiz yayinlanacak sekilde hazirlandi.

1. GitHub'da public bir repo olusturun.
2. Bu klasordeki dosyalari `main` branch'ine gonderin.
3. Cloudflare hesabinizda `Workers & Pages > Create application > Pages > Connect to Git` adimina gidin.
4. GitHub hesabinizi baglayin ve ilgili repoyu secin.
5. Build ayarlari icin sunlari girin:
   - Framework preset: `None`
   - Build command: bos birakin
   - Build output directory: `/`
6. Deploy dedikten sonra Cloudflare siteyi dogrudan repodan yayinlar.
7. Reponuza her yeni push yaptiginizda Cloudflare otomatik gunceller.

Isterseniz daha sonra Cloudflare uzerinden ozel domain de baglayabilirsiniz.

## Degistirmeniz Gereken Alanlar

- Marka adi veya hizmet metinleri
- Gerekirse adres ve ilce detaylari

Telefon numarasi `0552 004 21 90` olarak girildi.
