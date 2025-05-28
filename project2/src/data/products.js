export const productsByCategory = {
  category1: Array.from({length:9},(_,i)=>(
    { id: i+1, title: `Category1 - Product ${i+1}`,
      image: `/images/cat1-${i+1}.jpg`,
      description: `Description for product ${i+1} in category1.`
    }
  )),
  category2: Array.from({length:9},(_,i)=>(
    { id: i+101, title: `Category2 - Product ${i+1}`, image: `/images/cat2-${i+1}.jpg`, description: `Description for product ${i+1} in category2.` }
  )),
  category3: Array.from({length:9},(_,i)=>(
    { id: i+201, title: `Category3 - Product ${i+1}`, image: `/images/cat3-${i+1}.jpg`, description: `Description for product ${i+1} in category3.` }
  )),
};
