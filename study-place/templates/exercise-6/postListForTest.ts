import {
  PostItemProps,
  PostUser,
} from '../../answers/exercises/exercise-6/PostItem';

// ↓↓↓ここから下をApp.tsxにコピーした上で、「itemList」をPostListに渡せば、いい感じに表示される（はず）

const users = {
reactNative: {
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
    userName: 'React Native'
}as PostUser,
bugCatchingGirl: {
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqy4IKhb9PisIPr7hDY5u8RVCd_O9GE8KhrVVIYqCP8xHZWyogpKISD7xgb0HWcPAA3Yl1zPOd3qUL_1RuB45T2_A7aiIgd7T3RWoEIGRKtHbz-qYgP40AvXO17hmlLGYoPnstNawK8i4oXveX0PO7DxQXgUYtq868nELUv-nAZBJFfaixA6Xm1k-XlA/s917/mushitori_long_girl.png",
    userName: '虫取り少女'
}as PostUser,
guiterMan: {
    imageUrl: "https://4.bp.blogspot.com/-3HfGVEWeUsE/Vf-egUlwc0I/AAAAAAAAyP8/ZwKK1eo6Jmw/s800/music_guitarist_boy.png",
    userName: 'ギター男'
}as PostUser,
};

const itemList = [
{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,
{
    postUser: users.bugCatchingGirl,
    postContent: "虫採れた"
} as PostItemProps,
{
    postUser: users.reactNative,
    postContent: "Learn once, write anywhere."
} as PostItemProps,
{
    postUser: users.guiterMan,
    postContent: "音なった"
} as PostItemProps,
{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,
{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,
{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,
{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,{
    postUser: users.reactNative,
    postContent: "Hello World!!"
} as PostItemProps,
];