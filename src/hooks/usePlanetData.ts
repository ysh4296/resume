import { graphql } from "gatsby";

import { useStaticQuery } from "gatsby";

export const usePlanetData = () => {
  const data = useStaticQuery<Queries.GetAllPlanetsQuery>(graphql`
    query GetAllPlanets {
      allSanityPlanet {
        nodes {
          name
          description
          image {
            asset {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              url
            }
          }
        }
      }
    }`);

  return data.allSanityPlanet.nodes;
};
