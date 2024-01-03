import { Badge } from "flowbite-react";
import { useEffect, useState } from "react";

export const Tags = ({ tags }) => {
  const [imageTags, setImageTags] = useState([]);

  useEffect(() => {
    setImageTags(tagsToArray(tags));
  }, [tags]);

  const tagsToArray = (unsplitTags) => {
    let result = unsplitTags.split(" ");
    console.log("tags to array", result);
    return result;
  };

  return (
    <div className="flex flex-wrap gap-2 tags-wrapper">
      {imageTags.map((tag, id) => (
        <Badge color="gray" key={id} className="text-wrap text-ellipsis">
          {tag}
        </Badge>
      ))}
    </div>
  );
};
