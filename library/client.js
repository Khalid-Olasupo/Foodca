import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: "iiuj9ixg",
    dataset: "production",
    apiVersion: "2023-02-05",
    useCdn: true,
    token:
    "skdj9yyIacc99Dy6LvB4lo0mFeM7vsIg8tB99Km2qZXHHHYNeirsKbQHfAmERXDqUGU1vo1u9hN7s0NGODBcwCgTWeQxJDJ8GwSArGwKWuYbXLo8oPnFbw1pHYXCjFavdDg52vppEC9yRNKgqwM3QTBdBjC0zV9iyBi7PG88JoyzwjS3iHY7"
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);