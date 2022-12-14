![](https://img.shields.io/badge/Microverse-blueviolet)

# JavaScript Capstone Project

> In this project, a website for movies is being build. The external API used for showing items and details is [TVmaze API](https://www.tvmaze.com/api). 

## Built With

- HTML
- CSS
- Javascript
- Webpack
- APIs
  
## Live Demo (if available)

[**Live Demo Link 🚀**](https://sajeelzafar.github.io/JavaScript-Capstone/dist/index.html)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To understand the project you must have a basic knowledge about HTML, CSS, Javascript, Webpack and APIs.

### Setup

To run this project one must have Visual Studio (VS) Code installed and running.

### Usage

Clone and access the repository using the following commands on Git Bash:

  ```
   cd PATH 
   git clone _https://github.com/Sajeelzafar/JavaScript-Capstone.git_
   cd _JavaScript-Capstone_
   _npm install_
  _npm run build_
  _npm start_ 
  ```

Open the directory in visual studio code by typing the following command in Git Bash:

 ```
 code .
  ```

The website would not load at start. To load the website, follow the given steps:
- Open VScode and generate a key by using the following command
```
curl -X POST https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/

```
If it does not work try:

```
Remove-item alias:curl
curl -X POST https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/
```

- After generating the key redirect to ```"./src/modules/api_key.js"``` and paste the key in that file.
- The default key is generated for you in the comments of that file. 

## Authors

👤 **Sajeel Zafar**

- GitHub: [@Sajeelzafar](https://github.com/Sajeelzafar)
- Twitter: [@SajeelZafar6](https://twitter.com/SajeelZafar6)
- LinkedIn: [Sajeel Zafar](https://www.linkedin.com/in/sajeelzafar/)

👤 **Selma Ndapanda Hamutenya**

- GitHub: [@SelmaNdapanda](https://github.com/SelmaNdapanda)
- Twitter: [@SellohBlaq](https://twitter.com/sellohBlaq)
- LinkedIn: [selma-ndapanda-hamutenya-19169a1ab](https://linkedin.com/in/selma-ndapanda-hamutenya-19169a1


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Hat tip to [Font Awesome](https://fontawesome.com) for icons
- Hat tip to [Google APIs](https://fonts.googleapis.com) for fonts

## 📝 License

This project is [MIT](./LICENSE) licensed.


