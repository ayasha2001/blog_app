// Base Imports
import {
  BLOGS_CONFIGS,
  RELATED_ARTICLE_CONFIGS,
} from "@/app/components/blogs/configs";
import RelatedBlogsCard from "@/app/components/blogs/RelatedBlogsCard";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="flex flex-col px-4 lg:px-10">

    <div className="w-full flex">
      {/* Table of Contents Section */}
      <div className="flex w-1/4 bg-gradient-to-tl from-themeGrey to to-white h-[100vh] sticky top-0">
        <p className="text-9xl font-bold rotate bg-gradient-to-b from-black to-themeGrey inline-block text-transparent bg-clip-text">CONTENT</p>
        <div className="flex flex-col">
          <span className="h-52 w-8 bg-themeRed"></span>
          {BLOGS_CONFIGS?.map((blog, index: any) => {
            return (
              <p
                key={index}
                className="text-2xl font-medium hover:text-themeRed text-themeBlack m-2 cursor-pointer"
              >
                {blog.title}
              </p>
            );
          })}
        </div>
        {/* </div> */}
      </div>

      {/* Main Blog Section */}
      <div className="w-1/2 p-4 scrollbar-thin scrollbar-thumb-themeRed my-20">
        <h1 className="text-4xl py-4 text-themeBlack">3-2-1: On mental toughness, when confidence fools you, and the importance of neighborhoods</h1>
        
        <div className="flex flex-row gap-x-2 justify-start mt-4">
          <span className="text-sm text-gray-500">By</span>
          <h2 className="text-sm text-gray-500 uppercase font-light">Furqan Ahmed</h2>
          <span className="text-sm text-gray-500 uppercase font-light">|</span>
          <h2 className="text-sm text-gray-500 uppercase font-light">21st July 2024</h2>
        </div>

        <hr className="w-3/4 mt-6"></hr>

        <p className="py-16">
          People often ask me how I manage to keep going. Blue Dragon’s work is
          intense. It’s rare for a day to go by without us receiving a desperate
          call for help from someone in slavery or meeting a homeless child in a
          terrible situation. The numbers tell a slice of the story. Since the
          start of this year, we’ve rescued 118 people from slavery: brothels,
          forced marriages, and forced labor. In the same time, we’ve helped
          double that number of street kids – about 240 so far. It’s only human
          for the constant exposure to traumatised, terrified people to affect
          us deeply. Meeting children in desperate situations is both
          traumatising, and what keeps us going. And it does. Among the staff of
          Blue Dragon – the social workers, psychologists, lawyers, counselors –
          there’s often someone experiencing their own stress or even burnout.
          On occasion, people need to take time off work or seek professional
          help to deal with their own emotions and psychological responses. Both
          as individuals and as an organisation, we try our best but we have our
          limits. Finding the way forward Taking care of ourselves in the face
          of constant stress is the only way we can keep going. Being there for
          each other as a supportive team makes a world of difference. From an
          organisational point of view, there’s much we can do to provide for
          staff wellbeing and support people when they need it.<br></br><br></br>But in the end, 
          the most important thing of all is hope. We keep going because we
          believe it makes a difference. It’s worthwhile. Even when we fail;
          even when we encounter cases that we’re unable to help; we know
          there’s still someone else waiting for us who we can help. Should
          there come a day that I no longer think my contribution matters, I
          know I wouldn’t be able to continue. What drives me – what drives all
          of us at Blue Dragon, from our frontline staff to our donors and
          partners around the world – is our relentless hope that our world can
          be better. And so, no matter how hard things get, we continue People
          often ask me how I manage to keep going. Blue Dragon’s work is
          intense. It’s rare for a day to go by without us receiving a desperate
          call for help from someone in slavery or meeting a homeless child in a
          terrible situation. The numbers tell a slice of the story. Since the
          start of this year, we’ve rescued 118 people from slavery: brothels,
          forced marriages, and forced labor. In the same time, we’ve helped
          double that number of street kids – about 240 so far. It’s only human
          for the constant exposure to traumatised, terrified people to affect
          us deeply. Meeting children in desperate situations is both
          traumatising, and what keeps us going. And it does. <br></br><br></br>Among the staff of
          Blue Dragon – the social workers, psychologists, lawyers, counselors –
          there’s often someone experiencing their own stress or even burnout.
          On occasion, people need to take time off work or seek professional
          help to deal with their own emotions and psychological responses. Both
          as individuals and as an organisation, we try our best but we have our
          limits. Finding the way forward Taking care of ourselves in the face
          of constant stress is the only way we can keep going. Being there for
          each other as a supportive team makes a world of difference. From an
          organisational point of view, there’s much we can do to provide for
          staff wellbeing and support people when they need it. But in the end,
          the most important thing of all is hope. We keep going because we
          believe it makes a difference. It’s worthwhile. Even when we fail;
          even when we encounter cases that we’re unable to help; we know
          there’s still someone else waiting for us who we can help. Should
          there come a day that I no longer think my contribution matters, I
          know I wouldn’t be able to continue. What drives me – what drives all
          of us at Blue Dragon, from our frontline staff to our donors and
          partners around the world – is our relentless hope that our world can
          be better. And so, no matter how hard things get, we continues
        </p>
      </div>

      {/* Related Content */}
      <div className="w-1/4 p-4 border-l border-gray-300 sticky top-0 py-10">
        <h2 className="text-2xl mb-4">You may also like</h2>
        {RELATED_ARTICLE_CONFIGS.map((item: any, idx: number) => {
          return <RelatedBlogsCard key={idx} title={item?.title} href={item?.href} imgSrc={item?.imgSrc}/>
        })}
      </div>

    </div>

     {/* Navigation Buttons */}
    <div className="flex flex-row justify-between w-full my-10 gap-x-4">
      <div className="h-28 w-1/2 bg-themeRed text-themeGrey text-center hover:underline p-6 flex items-center gap-x-2 cursor-pointer"><ArrowLeftCircleIcon className='h-6 w-6'/><span className="truncate">Gautam Gambhir's Pick For Fielding Coach Rejected By BCCI. Report Makes Big Claim</span></div>
      <div className="h-28 w-1/2 bg-themeRed text-themeGrey text-center hover:underline p-6 flex justify-center items-center gap-x-2 cursor-pointer"><span className="truncate">I expect him to play like a...': Former India cricketer's advice for Hardik Pandya</span><ArrowRightCircleIcon className='h-6 w-6'/></div>
    </div>
    </div>
  );
};

export default BlogDetailPage;
