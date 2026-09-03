import { getImageUrl } from "@/utils/utils";

type MyProfileProps = {
  name: string;
  imageId: string;
  profession: string;
  awardCount: number;
  awards: string;
  discovery: string;
};

function MyProfile({
  name,
  imageId,
  profession,
  awardCount,
  awards,
  discovery,
}: MyProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>

      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />

      <ul>
        <li>
          <b>Profesi: </b>
          {profession}
        </li>

        <li>
          <b>Penghargaan: {awardCount} </b>
          ({awards})
        </li>

        <li>
          <b>Telah Menemukan: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <MyProfile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="Fisikawan dan kimiawan"
        awardCount={4}
        awards="Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci"
        discovery="polonium (unsur kimia)"
      />

      <MyProfile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="Ahli Geokimia"
        awardCount={2}
        awards="Penghargaan Miyake Geokimia, Penghargaan Tanaka"
        discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
    </div>
  );
}