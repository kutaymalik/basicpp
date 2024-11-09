
---

### Frontend README

**`/BasicAppUI/README.md`**

```markdown
# BasicApp Frontend

BasicApp'in kullanıcı arayüzü, React ve Tailwind CSS ile geliştirilmiştir. Kullanıcıların kayıt olması, giriş yapması, profil bilgilerini görüntülemesi, güncellemesi ve hesabını silmesi gibi işlevleri içerir.

## Başlangıç

### Gereksinimler

- [Node.js ve npm](https://nodejs.org/) (v14 veya üstü önerilir)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Kurulum

1. Proje dosyasını bilgisayarınıza klonlayın:
    ```bash
    git clone https://github.com/username/BasicAppUI.git
    ```

2. Proje dizinine gidin ve bağımlılıkları yükleyin:
    ```bash
    cd BasicAppUI
    npm install
    ```

3. Backend API'si ile entegrasyon için `.env` dosyası oluşturun ve API adresini belirtin:
    ```plaintext
    REACT_APP_API_URL=https://localhost:7262/BasicApp/api/v1
    ```

### Çalıştırma

Projeyi geliştirme modunda başlatmak için:
```bash
npm start

### NOT
Backend port'u ayağa kaldırıldığı zaman farklı olursa asicpp\src\services\api.js'teki adresi değiştiriniz.
(.env küçük bir proje olduğu için kullanılmadı.)
