db.produtos.updateMany(
    { nome: { $eq: "Big Mac" } },
    { $currentDate: { 
      lastModified: true,
      ultimaModificacao: { $type: "timestamp" },
      } },
  );
  
  db.produtos.find({
    ultimaModificacao: { $exists: true },
  }, { _id: 0, nome: 1 });