const Paginate = (data: any) => {
  const itemsPerPage = 5;
  const pages = Math.ceil(data.length / itemsPerPage);

  const paginateNumber = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return paginateNumber;
};

export default Paginate;