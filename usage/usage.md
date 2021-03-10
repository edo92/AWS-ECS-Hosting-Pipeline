## Code Base Usage

### Development Environment
- **Windows bash setup**
    ```
    npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
    ```

<br/>

- **Setup Environmental Variables. Add `.env` files in backend**
    ```
    MONGO_URI=mongodb://localhost/myapp
    MONGO_HOST=localhost
    ```

<br/>

- **install dependencies for client & backend**
    ```
    npm run setup
    ```

<br/>

- start dev
    ```
    npm run dev
    ```

<br/>

- [husky](https://typicode.github.io/husky/#/) libary initialize
- it may throw an warning becuse you have already pre-commit files

    ```
    yarn husky init
    ```

<br/>

### Production Environment
