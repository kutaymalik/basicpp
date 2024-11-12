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
    gh repo clone kutaymalik/basicpp
    ```

2. Proje dizinine gidin ve bağımlılıkları yükleyin:
    ```bash
    cd BasicAppUI
    npm install
    ```

3. Backend API'si ile entegrasyon için `.env` dosyasında backend hangi portta ayağa kalkarsa REACT_APP_API_URL değişkeninin aşağıdaki gibi sadece portunu değiştiriniz.
    ```plaintext
    REACT_APP_API_URL=https://localhost:7262/BasicApp/api/v1
    ```

### Çalıştırma

Projeyi geliştirme modunda başlatmak için:
```bash
npm start
```
