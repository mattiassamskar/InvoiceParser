﻿using System.Collections.Generic;
using Money.Models;

namespace Money.Db
{
  public interface IDbService
  {
    ICollection<Expense> GetExpenses();
    ICollection<Expense> GetFilteredExpenses(IEnumerable<string> filters, string month);
    void AddExpenses(IEnumerable<Expense> expenses);
    void AddExpense(Expense expense);
  }
}