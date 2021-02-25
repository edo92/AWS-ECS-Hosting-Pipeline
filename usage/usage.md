## Code Base Usage

### Development Environment
- **Setup Environmental Variables**
    - Add .env files in backend (/src/backend) with
    ```
    MONGO_URI=mongodb://localhost/myapp
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