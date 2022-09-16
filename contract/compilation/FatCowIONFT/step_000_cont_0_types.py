import smartpy as sp

tstorage = sp.TRecord(administrator = sp.TAddress, creator = sp.TAddress, fa2 = sp.TAddress, ledger = sp.TBigMap(sp.TNat, sp.TAddress), metadata = sp.TBigMap(sp.TString, sp.TBytes), next_token_id = sp.TNat, operators = sp.TBigMap(sp.TRecord(operator = sp.TAddress, owner = sp.TAddress, token_id = sp.TNat).layout(("owner", ("operator", "token_id"))), sp.TUnit), paused = sp.TBool, proposed_administrator = sp.TOption(sp.TAddress), token_metadata = sp.TBigMap(sp.TNat, sp.TRecord(token_id = sp.TNat, token_info = sp.TMap(sp.TString, sp.TBytes)).layout(("token_id", "token_info")))).layout(((("administrator", "creator"), ("fa2", ("ledger", "metadata"))), (("next_token_id", "operators"), ("paused", ("proposed_administrator", "token_metadata")))))
tparameter = sp.TVariant(accept_administrator = sp.TUnit, accept_fa2_administrator = sp.TUnit, balance_of = sp.TRecord(callback = sp.TContract(sp.TList(sp.TRecord(balance = sp.TNat, request = sp.TRecord(owner = sp.TAddress, token_id = sp.TNat).layout(("owner", "token_id"))).layout(("request", "balance")))), requests = sp.TList(sp.TRecord(owner = sp.TAddress, token_id = sp.TNat).layout(("owner", "token_id")))).layout(("requests", "callback")), mint = sp.TRecord(metadata = sp.TMap(sp.TString, sp.TBytes), to_ = sp.TAddress).layout(("metadata", "to_")), set_pause = sp.TBool, transfer = sp.TList(sp.TRecord(from_ = sp.TAddress, txs = sp.TList(sp.TRecord(amount = sp.TNat, to_ = sp.TAddress, token_id = sp.TNat).layout(("to_", ("token_id", "amount"))))).layout(("from_", "txs"))), transfer_administrator = sp.TAddress, transfer_fa2_administrator = sp.TAddress, update_operators = sp.TList(sp.TVariant(add_operator = sp.TRecord(operator = sp.TAddress, owner = sp.TAddress, token_id = sp.TNat).layout(("owner", ("operator", "token_id"))), remove_operator = sp.TRecord(operator = sp.TAddress, owner = sp.TAddress, token_id = sp.TNat).layout(("owner", ("operator", "token_id")))).layout(("add_operator", "remove_operator")))).layout(((("accept_administrator", "accept_fa2_administrator"), ("balance_of", "mint")), (("set_pause", "transfer"), ("transfer_administrator", ("transfer_fa2_administrator", "update_operators")))))
tprivates = { }
tviews = { "all_tokens": ((), sp.TList(sp.TNat)), "get_balance": (sp.TRecord(owner = sp.TAddress, token_id = sp.TNat).layout(("owner", "token_id")), sp.TIntOrNat), "is_operator": (sp.TRecord(operator = sp.TAddress, owner = sp.TAddress, token_id = sp.TNat).layout(("owner", ("operator", "token_id"))), sp.TBool), "is_paused": ((), sp.TBool), "total_supply": (sp.TRecord(token_id = sp.TNat).layout("token_id"), sp.TIntOrNat) }