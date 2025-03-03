# ibrathesheriff's site a.k.a. Sheriff's Jailhouse 🛡️
Welcome to the Sheriff's Jailhouse! This repository serves as the HQ for my personal portfolio and blog site, built with [Hugo](https://gohugo.io). Just like a sheriff keeps the peace, this site showcases my projects, wrangles ideas, and shares tales from my developer journey. Saddle up and explore!

## Features 🚀
- **Portfolio**: Highlighting my projects, skills, and achievements.
- **Blog**: Sharing notes, insights, tutorials, and stories from my developer journey.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Fast and Lightweight**: Built with Hugo for lightning-fast performance.

## Getting Started 🛠️

### Install and Run
To run the site locally:
1. **Clone the repository**:
    ```bash
    git clone https://github.com/ibrathesheriff/sheriffs-jailhouse
    cd ibrathesheriff-site
    ```
2. Install Hugo: Follow the [installation guide](https://gohugo.io/installation/).
3. Run the development server:
    ```
    hugo server
    ```
    or to run with fast rendering disabled:
    ```
    hugo server --disableFastRender
    ```
4. Open your browser and navigate to http://localhost:1313.

Instead of **Step 3** you can generate the public directory as follows:
```bash
hugo --cleanDestinationDir --minify
```

### Create a post
Run the following command to create a new blog post:
```bash
hugo new posts/new-post.md
```

### Create a note
Run the following command to create a new note document:
```bash
hugo new notes/new-note.md
```

### Create an episode
Run the following command to create a new episode document:
```bash
hugo new episodes/new-episode.md
```

### Create a project
Run the following command to create a new note document:
```bash
hugo new projects/new-project.md
```

### Create a open page for a year
Run the following command to create a new open document:
```bash
hugo new open/2025.md
```

### Change the Code Highlighting Style
Navigate to the [Chroma Style Gallery](https://xyproto.github.io/splash/docs/all.html) and select a code highlighting style e.g. dracula and then run:
```bash
hugo gen chromastyles --style=dracula > themes/green-screen/assets/sass/components/_code_blocks.scss
```

## Supported Navigation Commands

### Navigating to main list views
To navigate to a main list view:
```shell
ls posts
```
For examples to view posts, episodes, notes, projects or other main views like about, changelog, museum, credits etc.

### Navigating to an article
To navigate to read an article:
```
cat posts/hello-world.md
```
For example posts, episodes, notes or projects.

### View previous commands
To view previous commands use the arrow up or down keys.

You can use `history -c` to clear all previously entered commands.

## License 📜
My personal site is licensed under the [MIT License](https://mit-license.org/).

## Contact 📬
If you encounter any issues or have suggestions, please open an issue or reach out on the Discussions tab.

## TODO 📋
- [ ] Mark the official v2 release and add it to the changelog
- [ ] Add video of the Dell desktop no longer flashing orange
- [ ] Add more metadata to the list view for posts, notes and episodes e.g. date or tags
- [ ] Select a main font for the site - monospace font
- [ ] Document general categories, tags and keyword rules.
- [ ] Add a related section to link to related blog posts or notes
- [ ] Option to add a "resources" section in blog posts
- [ ] Add command autocomplete for the bash commands
- [ ] Add support for "history" command
- [ ] Add support for "show" or "pwd" command to show post, note and project URLs. You can maybe use a HTML element that is hidden say this page can use the command
- [ ] Hover effect on the list view to allow a reader to view the full heading
- [ ] Switch to Dart Sass
- [ ] Remove the last '|' from the tags display on posts
- [ ] Update the post and note summary system
- [ ] Complete the changelog
- [ ] Check if a webpage exists before navigating to it in the command mode
- [ ] Add a "help" command which explains the workings of the available commands
- [ ] Improve the display of tags and categories
- [ ] Add black border around the revolver cursor graphic
- [ ] Improve the display of images in markdown i.e. notes and posts
- [ ] Add scroll to the project content side for the projects single display page
- [ ] Add a 404 page
- [ ] Add disqus comment section for episodes, posts and notes
- [ ] Add effect when the site is set mute
- [ ] Add the option to display images for New Year's Bingo Card items - see /static/open/2025/isuzu-19060-wasp.jpg
- [ ] Pin post showing how to use te site
- [ ] Add styling for YouTube embeds
- [ ] Add a game like the no Internet Chrome game
    - See https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
- [ ] Private view to keep track a track of purchased devices over a vertical timeline
- [ ] Vision board with images or text of what I want to work towards - home office, old car and my own house. Use a private view.
- [X] Fix broken image links on the posts page
- [X] Add styling for inline <code> elements.
