// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
];

function createPost(post) {
  const postElement = document.createElement("div");
  
  //1.1
  const profile=document.createElement('div');
  const profileImg=document.createElement('div');
  const userName=document.createElement('span');
  const img=document.createElement('img');
  const like=document.createElement('div');
  const likeImg=document.createElement('img');
  const likeCnt=document.createElement('span');
  const text=document.createElement('p');
  
  postElement.setAttribute('id','post');
  profile.setAttribute('id','profile');
  profileImg.setAttribute('id','profileImg');
  userName.setAttribute('id','userName');
  img.setAttribute('id','img');
  likeImg.setAttribute('id','likeImg');
  likeCnt.setAttribute('id','likeCnt');
  text.setAttribute('id','text');

  profile.append(profileImg,userName);
  userName.append(post.username);
  img.setAttribute('src',post.image);
  like.append(likeImg,likeCnt);
  likeImg.setAttribute('src','./img/heart.png');
  likeCnt.append(post.likes);
  text.append(post.description);
  postElement.append(profile,img,like,text);
  //

  return postElement;
}

// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");

  //1.2
  for(let i=0; i<POSTS.length; i++){
    postsContainer.append(createPost(POSTS[i]));
  }
}

main();
