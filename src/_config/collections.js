/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

/** All trials as a collection. */
export const getAllTrials = collection => {
  return collection.getFilteredByGlob('./src/trials/**/*.md').reverse();
};

/** All commentary posts as a collection. */
export const getAllCommentaries = collection => {
  return collection.getFilteredByGlob('./src/commentary/**/*.md').reverse();
};

/** All reviews as a collection. */
export const getAllReviews = collection => {
  return collection.getFilteredByGlob('./src/reviews/**/*.md').reverse();
};


/** All tags from all posts as a collection - excluding custom collections */
export const tagList = collection => {
  const tagsSet = new Set();
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
    item.data.tags.filter(tag => !['trial', 'review', 'commentary', 'all'].includes(tag)).forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

// Collection for Unique Disease Categories from 'trial' items
export const uniqueDiseaseCategories = collectionApi => {
  const allTrials = collectionApi.getFilteredByTag("trial");
  let categoriesSet = new Set(); // Use a Set to store unique values

  allTrials.forEach(item => {
    if (item.data.diseaseCategories && Array.isArray(item.data.diseaseCategories)) {
      item.data.diseaseCategories.forEach(category => {
        if (category && typeof category === 'string' && category.trim() !== '') {
          categoriesSet.add(category.trim());
        }
      });
    }
  });
  return Array.from(categoriesSet).sort();
};

// === NEW: Collection for Unique Topics from 'trial' items ===
export const uniqueTopics = collectionApi => { // Renamed parameter to collectionApi
  const allTrials = collectionApi.getFilteredByTag("trial");
  let topicsSet = new Set(); // Use a Set for unique values

  allTrials.forEach(item => {
    if (item.data.topics && Array.isArray(item.data.topics)) {
      item.data.topics.forEach(topic => {
        if (topic && typeof topic === 'string' && topic.trim() !== '') {
          topicsSet.add(topic.trim());
        }
      });
    }
  });
  return Array.from(topicsSet).sort();
};
