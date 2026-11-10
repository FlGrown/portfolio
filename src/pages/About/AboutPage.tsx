import { BrickTimeline, Photo, PhotoGrid } from "@/components";
import { career, education } from "@/data/career";
import shared from "@/index.module.scss";
import { AlbumType } from "@/types";
import profile from "../../assets/profile-pic.jpg";
import styles from "./AboutPage.module.scss";

// Every folder in src/assets becomes one slideshow tile, in folder-name order.
// To add a tile, add a folder of photos; to add a slide, add a photo to a folder.
const albumOrder = ["travel", "lego"];
const albumTitles: Record<string, string> = { lego: "LEGO" };

const photoModules = import.meta.glob<string>(
  "../../assets/*/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);

function buildAlbums(): AlbumType[] {
  const byFolder = new Map<string, string[]>();
  for (const [path, src] of Object.entries(photoModules)) {
    const folder = path.split("/").slice(-2)[0];
    if (!folder) continue;
    byFolder.set(folder, [...(byFolder.get(folder) ?? []), src]);
  }

  const rank = (folder: string) => {
    const position = albumOrder.indexOf(folder);
    return position === -1 ? albumOrder.length : position;
  };

  return [...byFolder.entries()]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([folder, sources]) => ({
      id: folder,
      title:
        albumTitles[folder] ?? folder.charAt(0).toUpperCase() + folder.slice(1),
      photos: sources.map((src) => ({ src })),
    }));
}

const albums = buildAlbums();

export const AboutPage = () => {
  return (
    <main className={shared.container}>
      <section className={`${shared.hero} ${styles.aboutHero}`}>
        <div className={styles.aboutHeroText}>
          <p className={shared.eyebrow}>About</p>
          <h1 className={shared.heroTitle}>
            A psychology degree, a math degree, and{" "}
            <em>ten years of front-end.</em>
          </h1>
          <p className={shared.heroLead}>
            I'm Jorge. I care about accessibility, performance, and getting the
            small things right, and I'm as comfortable leading architecture
            decisions as pairing with a designer or chasing a production issue.
          </p>
        </div>
        <div className={styles.aboutHeroPhoto}>
          <Photo src={profile} />
        </div>
      </section>

      <section className={shared.section}>
        <div className={shared.sectionHead}>
          <h2>Built brick by brick</h2>
          <p className={shared.eyebrow}>Pick a brick</p>
        </div>
        <BrickTimeline chapters={career} baseplate={education} />
      </section>

      <section className={shared.section}>
        <div className={shared.sectionHead}>
          <h2>Outside of work</h2>
        </div>
        <PhotoGrid albums={albums}>
          <div className={styles.outsideTile}>
            <h3>Life beyond the IDE</h3>
            <p>
              When I'm not building UIs, I'm usually exploring somewhere new. At
              home I'm a life-long LEGO fan and enjoy building from many of the
              themes they offer.
            </p>
          </div>
        </PhotoGrid>
      </section>
    </main>
  );
};
