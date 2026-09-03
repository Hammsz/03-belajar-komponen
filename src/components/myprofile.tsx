import { getImageUrlV2 } from "@/utils/utils";

type Person = {
  name: string;
  imageId: string;
};

type MyAvatarProps = {
  person: Person;
  size: number;
};

function MyAvatar({ person, size }: MyAvatarProps) {
  const imageSize = size < 90 ? "s" : "b";

  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  const person = {
    name: "Gregorio Y. Zara",
    imageId: "7vQD0fP",
  };

  return (
    <div>
      <h1>Ukuran 40</h1>
      <MyAvatar size={40} person={person} />

      <h1>Ukuran 100</h1>
      <MyAvatar size={100} person={person} />
    </div>
  );
}