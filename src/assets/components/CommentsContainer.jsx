import React from "react";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
    like: "20K",
    reply: [
      {
        name: "Akshay Saini",
        text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
        like: "20K",
        reply: [
          {
            name: "Akshay Saini",
            text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
            like: "20K",
            reply: [
              {
                name: "Akshay Saini",
                text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
                like: "20K",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
    like: "20K",
    reply: [
      {
        name: "Akshay Saini",
        text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
        like: "20K",
        reply: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
    like: "20K",
    reply: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem  heyaaa tere liye yaad meko ayaa ree heyaaa ",
    like: "20K",
    reply: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, like, reply } = data;
  return (
    <div className="flex shadow-md bg-gray-50 my-2">
      <img
        className="h-14 w-12 cursor-pointer"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt="user"
      />
      <div className="">
        <p className="font-semibold">{name}</p>
        <p>{text}</p> <span className="px-4">{like}</span>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((cmnts, idx) => {
    return (
      <div key={idx}>
        <Comment data={cmnts} />
        <div className="border border-l-black pl-5 ml-5">
          <CommentList comments={cmnts.reply} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-lg font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
