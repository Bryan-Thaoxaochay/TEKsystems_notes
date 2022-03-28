let post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in. Amet risus nullam eget felis eget nunc lobortis. Amet volutpat consequat mauris nunc congue nisi. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Convallis a cras semper auctor neque vitae tempus quam. Morbi tristique senectus et netus et malesuada. Eget est lorem ipsum dolor sit amet. Leo vel orci porta non pulvinar neque laoreet suspendisse. Bibendum ut tristique et egestas quis. Lobortis mattis aliquam faucibus purus in massa. Eget nunc scelerisque viverra mauris in...";

function displayPosts(post) {
  for (let i = 1; i < 10; i++) {
    let mainTag = document.getElementById("recentPosts");
    let sectionTag = document.createElement("section");
    let h3Tag = document.createElement("h3");
    let pTag = document.createElement("p");

    mainTag.appendChild(sectionTag);
    sectionTag.appendChild(h3Tag);
    sectionTag.appendChild(pTag);

    h3Tag.innerHTML = "Post " + i;
    pTag.innerHTML = post;
  }
}

displayPosts(post);