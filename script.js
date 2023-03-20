//your code here!
const list = document.getElementById("list");
const listContainer = document.querySelector(".infi-list");

const loadMore = () => {
  // Add 2 more list items to the list
  const newItems = document.createDocumentFragment();
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.textContent = `List item ${list.children.length + i + 1}`;
    newItems.appendChild(li);
  }
  list.appendChild(newItems);
};

listContainer.addEventListener("scroll", () => {
  if (
    listContainer.scrollTop + listContainer.clientHeight >=
    listContainer.scrollHeight
  ) {
    loadMore();
  }
});

// Initially load 10 list items
loadMore();
