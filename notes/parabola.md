# Run 31 — Shrinking targets on the parabola at radix powers

The parabola has an arithmetic transition that the linear theory does not predict. In one base, zero targets have exact local dimension \(1/[2(1+\sigma)]\) when the larger fractional window has exponent \(\tau\ge 1/2\). For each first target and almost every second target the answer is \((1-\tau)/(1+\sigma)\) up to \(\tau=1\), where the dimension is zero. For coprime bases, the \(S\)-adic Subspace Theorem resolves occupancy at the first scale of bounded integer remainders for rational targets. All dimension results below are unconditional.

## Setup and results

Let \(Q=e^n\), \(N=B_1^{n_1(n)}\asymp Q^{\kappa_1}\) and \(M=B_2^{n_2(n)}\asymp Q^{\kappa_2}\), with positive rates and digit positions satisfying \(n_i(n)=\kappa_i n/\log B_i+O(1)\). Equal positions \(n_i=n\) give \(\kappa_i=\log B_i\). Take positive physical widths \(r_i\asymp Q^{-t_i}\), \(t_i>\kappa_i\), and write
\[
 R=\max(r_1,r_2),\qquad r=\min(r_1,r_2),\qquad
 T=\min(t_1,t_2),\qquad U=\max(t_1,t_2).
\]
The symmetric set is the limsup of
\[
 \left|x-\frac{a+y_1}{N}\right|<r_1,\qquad
 \left|x^2-\frac{b+y_2}{M}\right|<r_2,\qquad a,b\in\mathbb Z.
\]
All dimension statements are local on \((0,\infty)\), as in the line paper, and give the dimension on the graph as well. Proofs work on compact intervals in \((0,\infty)\), with constants allowed to depend on the interval. Passing to the endpoint \(x=0\) can add at most one point. Changing open windows to closed windows changes at most a countable set. Right-sided windows of width \(r_i\) can be represented exactly by symmetric windows of radius \(r_i/2\) with a level-dependent shift, up to endpoint inclusions. Specific claims about right-sided occupancy below use the original, unshifted targets.

For one base write \(q=B^n\), \(r_i\asymp q^{-1-\tau_i}\), \(\tau=\min_i\tau_i\), and \(\sigma=\max_i\tau_i\). For the limiting case \(\tau=0\), allow one or both physical exponents to equal the starting exponent, so the corresponding fractional radius stays bounded below. The results allow any fixed upper and lower multiplicative factors in the radii.

| One-base target | Range | Local dimension or occupancy |
|---|---|---|
| Every target, even level-dependent | \(0\le\tau\le\sqrt{2}-1\) | \((1-\tau)/(1+\sigma)\) |
| Every target, even level-dependent | \(1/3<\tau<1/2\) with \((1-\tau)/(1+\sigma)\le 1/\tau-2\) | \((1-\tau)/(1+\sigma)\) |
| Zero target | \(\tau\ge1/2\) | \(1/[2(1+\sigma)]\), including \(\tau=1/2\) |
| Fixed rational targets | \(\tau>1\) | \(1/[2(1+\sigma)]\) if exact shifted centers exist infinitely often. Otherwise empty. |
| Each fixed \(y_1\), Haar-almost every \(y_2\) | \(0<\tau<1\) | \((1-\tau)/(1+\sigma)\) |
| Each fixed \(y_1\), Haar-almost every \(y_2\) | \(\tau=1\) or \(\tau>1\) | Dimension zero at equality, with a dense \(G_\delta\) for rational \(y_1\). Empty above equality. |

For two denominators put
\[
 S=\min(\kappa_1,\kappa_2),\qquad L=\max(\kappa_1,\kappa_2),\quad
 C=M/\gcd(N^2,M),\quad K=N^2/\gcd(N^2,M)\asymp Q^k,\quad d_*= \kappa_1-k/2.
\]

| Two-denominator target | Range | Local dimension |
|---|---|---|
| Every target, even level-dependent | \(T<L\) | \(\min\{S/T,(S+L-T)/U\}\) |
| Every target, even level-dependent | \(L\le T<2(S+L)/3\) | \((S+L-T)/U\) |
| Zero target | \(T>L\) and \(T-\kappa_2\ge\max(\kappa_1,k)-d_*\) | \(d_*/U\) |
| Fixed rational targets | Same range as the preceding row and infinitely many exact compatible levels | \(d_*/U\) |
| Each fixed \(y_1\), Haar-almost every \(y_2\) | \(K\ll N\) and \(L<T<\kappa_2+k\) | \((S+L-T)/U\) |
| Each fixed rational \(y_1\), Haar-almost every \(y_2\) | \(K\ll N\) and \(L<T=\kappa_2+k\) | \((\kappa_1-k)/U\), with dense \(G_\delta\) occupancy also when \(k=\kappa_1\) |

The high-range counting bound holds without assuming compatibility. In that range, if the targets are rational and only finitely many levels have exact shifted centers, the upper bound is \(\max(0,\max(\kappa_1,k)-(T-\kappa_2))/U\). A stronger occupancy statement below covers \(T>\kappa_2+k\), and also \(T=\kappa_2+k\) when \(k>\kappa_1\). In particular for coprime radices at \(T=\kappa_2+2\kappa_1\), the homogeneous symmetric and left-closed right-sided limsups on the positive half-line consist precisely of the positive integers. The strict right-sided limsup is empty.

The two-base ranges refer to one base on each coordinate, so exchanging radices while leaving their coordinate assignments fixed changes the question. For example, \(N=2^n\), \(M=6^n\) give \(K=2^n\) and \(d_*=(\log 2)/2\). The homogeneous regime begins at \(T=\log 6+(\log 2)/2\), and the almost-every-second-target formula holds throughout \(\log 6<T<\log 6+\log 2\). For \(N=2^n\), \(M=3^n\), the all-target formula includes \(\log 3\le T<2\log 6/3\). The coprime critical result applies at \(T=\log 12\).

## Reduction to interval counts

On each compact interval \(I\subset(0,\infty)\), both coordinate maps have derivative bounded above and away from zero on a slightly larger interval. If \(T\ge L\), choose either axis as a sampling grid and let its center in parameter coordinates be \(x_a\). Every overlap satisfies the other congruence at \(x_a\) with fractional tolerance at most a constant times \(N_{\rm other}R\). There are \(O(1)\) possible matching centers on that axis per \(x_a\), and the overlap has length \(O(r)\). Conversely, a discrepancy smaller than \(c_I N_{\rm other}R\) puts the two centers within a sufficiently small multiple of \(R\). A ball of radius \(c'_I r\) about the center of the narrower window then lies inside both windows. This works with either order of the radii and with equal rates. For \(T>S\), when sampling the smaller grid the accepted ball centers stay separated by \(\gg Q^{-S}\) after an \(O(R)\) displacement. Use a bounded enlargement of \(I\) in both counts and mass transference so there are finitely many balls per level.

Here is the Cantor estimate used for nonuniform distributions. Suppose the selected disjoint level balls have radius \(\asymp Q^{-U}\), centers separated by \(\gg Q^{-v}\) with \(v<U\), and every fixed subinterval \(J\) eventually supplies \(\gg |J|Q^A\) balls. Suppose the normalized count of balls meeting any interval of length \(\ell\gtrsim Q^{-U}\) is \(\ll\ell\) for \(\ell\ge Q^{-\eta}\), and \(\ll\ell^{s_0}\) at smaller scales, for some fixed \(\eta>0\), where \(s_0\le A/U\). Take stages sufficiently far apart, keep children in the middle of each parent and split mass equally. A parent of radius \(R_0\) has mass at most \(R_0^s\) for any \(s<s_0\), by taking each new \(Q\) large relative to \(R_0\) and using \(A>sU\). For \(Q^{-\eta}\le\ell\le R_0\) the mass bound inside the parent is \(O(R_0^{s-1}\ell)\). For smaller \(\ell\) down to the child radius it is \(O(R_0^{s-1}\ell^{s_0})\), which is \(O(\ell^s)\) once \(Q^{-\eta(s_0-s)}R_0^{s-1}\le1\). An interval of length between successive child and parent scales meets \(O(1)\) parents by the separation. This gives the lower bound \(s_0\). Upper bounds use Hausdorff–Cantelli, since \(Q=e^n\). For a uniform mesh, the simpler proof is to inflate each \(r\)-ball to radius \(r^s\), obtain full coverage of each interior test interval at the selected levels, and use mass transference. [Beresnevich–Velani, Theorem 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

## 1. All targets when the wider window is relatively large

**When \(T<L\).** The larger window is on the axis with the smaller denominator, since the other physical exponent is greater than \(L\). Each coarse window of radius \(\asymp Q^{-T}\) contains \(\asymp Q^{L-T}\) fine centers, uniformly in shifts. Keep fine balls of radius \(c_IQ^{-U}\) in the middle of those windows. There are \(\asymp |J|Q^{S+L-T}\) such balls in each fixed \(J\). Covering by either the coarse balls or all the fine balls gives the two upper bounds in the table. For the lower bound set \(A=S+L-T\). For \(\ell\ge Q^{-T}\), the normalized local count is \(\ll \ell+Q^{-S}\). For \(\ell<Q^{-T}\), separation of coarse windows gives \(\ll \ell Q^{T-S}+Q^{-A}\). For \(Q^{-T}\le\ell<Q^{-S}\) the first bound is \(O(\ell^{S/T})\), and for \(Q^{-U}\lesssim\ell<Q^{-T}\) the second is \(O(\ell^{S/T}+\ell^{A/U})\). Apply the Cantor estimate.

**When \(L\le T<2(S+L)/3\).** Sample the smaller grid. In its coordinate the other map is \(f(z)=z^2\) or \(\sqrt z\), with \(|f''|\asymp_I1\). Write
\[
 \delta\asymp Q^{L-T},\quad \lambda=T-L,\quad F=Q^{L-2S},\quad
 A=S+L-T,\quad \beta=L-T/2 .
\]
The phase at integer index \(a\) is \(N_{\rm other} f((a+y_{\rm small})/N_{\rm small})\), with second derivative of size \(F\). The second-derivative estimate for its \(h\)-fold phase on \(P\) consecutive indices is \(O(P\sqrt{hF}+(hF)^{-1/2})\). An interval test of width \(\delta\) is bounded above by a scaled Fejér kernel of degree \(\asymp\delta^{-1}\) with coefficients \(O(\delta)\). Summing the derivative estimate yields
\[
 \#\ \ll P\delta + P\sqrt{F/\delta}+\sqrt{\delta/F}.
\]
With \(P\ll \ell Q^S+1\) the middle term is \(O(P\delta)\) even at \(T=2(S+L)/3\). For the lower count on a fixed \(J\) use Erdős–Turán at \(H=\lceil C/\delta\rceil\). The error is \(O(P/H+P\sqrt{HF}+F^{-1/2})\). Choose \(C\) large and fixed to make the first term small relative to \(P\delta\). The other terms are \(o(P\delta)\), since \(T<2(S+L)/3\) and \(T<3L/2\). This gives \(\asymp |J|Q^A\) balls in the inner test. At \(T=L\) the inner tolerance can be any sufficiently small positive constant. The outer test has bounded multiplicity and its count follows from the sampling grid.

For \(L<T\), the normalized local upper bounds are
\[
 \ll \min\{\ell+Q^{-\beta},\,\ell Q^\lambda+Q^{-A}\}.
\]
Enlarging an interval by \(O(R)\) costs only a bounded factor when \(\ell\ge R\). For \(\ell<R\), separation gives \(O(1)\) centers directly. Here \(\beta<S\), and \(A>0\). At macro scales \(\ell\ge Q^{-\beta}\) use the first bound. The crossover inequality
\[
 \min\{Q^{-\beta},\,\ell Q^\lambda\}
 \le \ell^{\beta/(\beta+\lambda)},\qquad
 \frac{\beta}{\beta+\lambda}=\frac{2L-T}{T}\ge \frac{A}{U}
\]
and \(Q^{-A}\ll\ell^{A/U}\) at scales \(\ell\gtrsim Q^{-U}\) give the fine-scale estimate. The same Frostman bounds at \(T=L\) follow directly from the single sampling grid with \(A=S\). The resonance \(M=N^2\), \(y_1=0\), \(y_2=1/2\), and \(r_1=1/M\) shows why the other cases at \(T=L\) need a separate argument. There are no overlaps on a fixed sufficiently small positive interval once \(M r_2\) is small. At an \(x\)-center \(M x^2=a^2\), and an \(r_1\)-displacement changes this by less than \(1/3\) on that interval. [Graham–Kolesnik, Theorem 2.2](https://doi.org/10.1017/CBO9780511661976)

## 2. Enlarging the all-target range in one base

Sample \(x=(a+y_1)/q\), so the other phase is \((a+y_1)^2/q\). Uniformly in real \(y_1,y_2\) and intervals of \(P\ll q\) integers, the count in a circle interval of length \(2\delta\) is
\[
 2\delta P+O_B(\sqrt q\,\log^2(2q)).
\]
For the \(h\)-th exponential sum, complete the quadratic phase modulo \(q\) and put the arbitrary real linear phase and the interval into the Fourier weight. The normalized Fourier coefficients of that weight have \(\ell^1\)-sum \(O(\log(2q))\) by summing the geometric-sum bound. Each complete Gauss sum with integer linear term has squared modulus at most \(q\,\gcd(2h,q)\), by differencing and orthogonality. Erdős–Turán with \(H=q\) gives the error above since
\[
 \sum_{h\le q}\frac{\sqrt{\gcd(2h,q)}}h
 \ll \log(2q)\sum_{d\mid q}d^{-1/2}\ll_B\log(2q).
\]
In particular for \(\tau<1/2\), this gives both upper and lower macroscopic counts of order \(|J|q^{1-\tau}\), even for moving targets. It also supplies the all-target upper dimension \(\max(1-\tau,1/2)/(1+\sigma)\) for every \(\tau>0\).

At \(\tau=0\), test a sufficiently small fixed tolerance on the other axis. The Gauss estimate gives \(\gg_I |J|q\) selected balls in every fixed \(J\) for \(q\) sufficiently large. Their centers lie within \(O(q^{-1})\) of the sampling grid, so selecting a maximal \(c_Iq^{-1}\)-separated subset preserves the count up to a constant. The normalized upper count is \(O(\ell+q^{-1})\). Apply the Cantor estimate with \(A=1\) and \(U=1+\sigma\). If \(\sigma=0\), use inner balls of radius \(q^{-1-\epsilon}\) and let \(\epsilon\downarrow0\). This proves the all-target endpoint even for arbitrary fixed multiplicative factors in the widths.

For \(1/3\le\tau<1/2\), put \(a_*=1-\tau\), \(g=1/2-\tau\) and \(j_*=(3\tau-1)/2\). At scales \(\ell\gtrsim q^{-1-\sigma}\) the count, divided by \(q^{a_*}\), is bounded by a constant times the minimum of the following expressions:
\[
 \ell+q^{-g+\epsilon},\qquad
 \ell q^{j_*}+q^{-a_*/2},\qquad
 \ell q^\tau+q^{-a_*}.
\]
The three bounds are from completion, the Fejér and second-derivative estimate, and separation of the \(q\)-grid, respectively. For \(\ell\ge R\) use the interval enlargement argument. For smaller \(\ell\), the one-center bound \(O(q^{-a_*})\) suffices. In the displayed minimum, the two interpolations, after allowing \(O(\ell+q^{-a_*})\), are
\[
 \min(q^{-g+\epsilon},\ell q^{j_*})\le
 \ell^{(g-\epsilon)/(g-\epsilon+j_*)},
 \qquad
 \min(q^{-a_*/2},\ell q^\tau)\le
 \ell^{(1-\tau)/(1+\tau)}.
\]
Indeed \(\min(\ell+G,X+P,Y+D)\le\ell+\min(G,X)+\min(P,Y)+D\). At macro scales \(\ell\ge q^{-g+\epsilon}\) use completion. The resulting Cantor lower bound, taking \(\epsilon\downarrow0\), is
\[
 \min\left\{\frac{1-\tau}{1+\sigma},\,\frac1\tau-2\right\},
\]
using \(g+j_*=\tau/2\) and \(\sigma\ge\tau\). This closes the all-target endpoint \(\tau=1/3\) as well as the extended range stated in the table, including equality in the inequality between dimensions. For equal exponents \(\sigma=\tau\), the condition reduces to \(\tau\le\sqrt{2}-1\).

## 3. Exact centers and high exponents

For homogeneous targets the exactly compatible centers are \(x\in D^{-1}\mathbb Z\), where
\[
 D=\prod_p p^{\min(\nu_p(N),\lfloor\nu_p(M)/2\rfloor)}
   \asymp N/\sqrt K\asymp Q^{d_*}.
\]
This follows by writing a reduced denominator \(w\), which must satisfy \(w\mid N\) and \(w^2\mid M\). Each point of this grid in a compact interval provides an interior ball of radius \(\asymp r\) for symmetric windows. For right-sided windows use a small positive displacement of order \(r\) from the center and a still smaller ball, using the lower and upper derivative bounds on \(I\). When \(d_*>0\), enlarged balls give the lower bound \(d_*/U\) by mass transference. In one base \(D\asymp q^{1/2}\) for every integer radix, including nonsquares and either parity of \(n\).

The one-base homogeneous high-exponent formula is a corollary of existing estimates and this mesh argument. Huang's Theorem 4 and Huang–Li's Theorem 4 each give the upper exponent \(1/2\) in the level count when \(\delta\ll q^{-1/2}\) and \(q=B^n\). Huang–Li also describe the exact rational centers. Mass transference gives the matching Hausdorff lower bound here for separate widths and either open convention. The following congruence proof applies also to two denominators and rational translations. [Huang, Theorem 4](https://arxiv.org/pdf/1802.00525#page=3) · [Huang–Li, Theorem 4](https://arxiv.org/pdf/1902.06047#page=4)

For rational \(y_1,y_2\), let \(d_0\) clear both denominators and put \(A_0=d_0(a+y_1)\). Every overlap on \(I\) gives an integer
\[
 m=C A_0^2-d_0^2 K(b+y_2),\qquad |m|\ll_I K\delta,\qquad \delta=MR,
\]
and \(C A_0^2\equiv m\bmod K\) with \((C,K)=1\). The same statements hold with \(d_0=1\) in the zero case. The zero remainders are exactly the shifted curve centers. All of them lie on the grid of denominator
\[
 D'=\prod_p p^{\min(\nu_p(d_0N),\lfloor \nu_p(d_0M)/2\rfloor)}\asymp D.
\]
If one such center \(h/D'\) exists at a level, all \((h+d_0j)/D'\), \(j\in\mathbb Z\), are exact. Indeed \(D'\mid d_0N\) and \((D')^2\mid d_0M\), while the differences of the numerators for both powers are multiples of \(d_0\). This supplies a full mesh with comparable spacing at every compatible level, independently of how sparse those levels are.

For each \(m\ne0\), roots modulo \(p^v\Vert K\) lie in at most four classes modulo \(p^{v-w}\), where \(w=\min(\lfloor\nu_p(m)/2\rfloor,\lfloor v/2\rfloor)\). If \(\nu_p(m)<v\) is odd there are no roots. If it is \(2w<v\), divide out \(p^{2w}\) and solve the unit square congruence, which has at most two roots for odd \(p\) and four at \(p=2\). If \(\nu_p(m)\ge v\), the roots form the zero class modulo \(p^{\lceil v/2\rceil}\). The Chinese remainder theorem gives at most a bounded number of classes modulo \(K/\rho(m)\), where \(\rho(m)=\prod_{p\mid K}p^w\). Thus there are \(O(1+N\rho(m)/K)\) candidate integers \(A_0\) in a fixed compact interval of parameter values. For \(H\ge1\),
\[
 \sum_{0<|m|\le H}\rho(m)
 \le 2H\sum_{\substack{d\ge1\\p\mid d\implies p\mid B_1}}\frac1d
 \ll_{B_1} H.
\]
To see this, dominate \(\rho(m)\) by \(\sum_{d^2\mid m,\ p\mid d\Rightarrow p\mid B_1}d\) and sum multiples of \(d^2\). For \(H<1\) the nonzero sum is empty. Therefore
\[
 \#\text{overlaps}\ll_I D+\delta(N+K).
\]
The \(D\) term can be omitted at levels without exact compatibility. The high-exponent formula and its equality case follow from this cover and the exact mesh. In one base, for rational targets with \(\tau\ge1/2\), infinitely many exact compatible levels give the same plateau as zero target. With only finitely many exact compatible levels the upper bound is \((1-\tau)_+/(1+\sigma)\). For example in base two, \(y_1=0,y_2=1/2\) has the exact class \(a^2\equiv2^{n-1}\pmod{2^n}\) when \(n\) is odd, while \(y_1=0,y_2=1/3\) has no exact centers at any level.

### Occupancy at the bounded-remainder scale

For \(T>\kappa_2+k\), the inequality \(|m|\ll_I K\delta\) forces \(m=0\) at every late hit, for every fixed rational target. This still holds at \(T=\kappa_2+k\) if \(k>\kappa_1\). To prove the endpoint, suppose infinitely many levels have false centers on a compact positive interval. Extract a fixed nonzero integer \(m\) and a fixed square class \(C=c_0 c^2\), possible because \(C\) has finite prime support. Set \(X=c A_0\), so \(c_0 X^2-m\) is divisible by \(K\). At each prime with an unbounded valuation in \(K\), compactness of \(\mathbb Z_p\) gives a root \(\xi_p\) of \(X^2=m/c_0\) in \(\mathbb Q_p\) after passage to a subsequence. The root is nonzero and algebraic. From factorization, choosing its sign and passing to a further subsequence gives
\[
 |X-\xi_p|_p\ll_m p^{-\nu_p(K)}.
\]
The sets of growing and bounded valuations are fixed because the radix positions have fixed rates up to bounded errors. At each growing prime of \(K\) take the forms \(X-\xi_p,1\). Use \(X,1\) at infinity and the other fixed primes, including every prime of \(c\), where \(|X|_p\le |c|_p\). The product is \(\ll_I |cA_0|/(cK)\ll_I N/K\). The primitive vector \((X,1)\) has height \(H\asymp_I N\sqrt C=\sqrt{MK}\asymp Q^{(\kappa_2+k)/2}\), with the fixed square class absorbed in the constants. Thus \(K/N\gg H^\eta\) for any fixed \(0<\eta<2(k-\kappa_1)/(\kappa_2+k)\). For late levels the product is below \(H^{-\eta/2}\), so the \(S\)-adic Subspace Theorem applies. The finitely many rational proper subspaces allow only finitely many \(X\), contradicting \(|A_0|\gg_I N\to\infty\). This proves eventual exactness on each compact interval. [Schlickewei, \(p\)-adic Subspace Theorem](https://doi.org/10.1515/crll.1976.288.86)

If \(d_*=0\), the grids of possible exact centers are contained in one fixed rational grid for all levels, by the bounded valuations of \(D'\). In the eventual-exact regimes the symmetric and left-closed limsups then consist precisely of those exact centers that recur infinitely, while the strict right-sided limsup is empty. If \(d_*>0\), infinitely many compatible levels give dimension \(d_*/U\) for all three window conventions and otherwise the limsup is empty. The argument for exactness at equality uses \(k>\kappa_1\). One cannot infer it when \(k=\kappa_1\), which includes the single base at \(\tau=1\).

## 4. Almost every second target and category

Assume \(T>L\), fix the first target \(y_1\), and choose the second parameter \(z=y_2\) with Haar measure. The upper covering count at level \(n\) has expectation \(O_I(N\delta)\), with \(\delta\asymp MR\), since each first grid point passes the outer second-coordinate test on a \(z\)-interval of length \(O(\delta)\). Integrating the covering sum gives local dimension at most \(\max(0,\kappa_1+\kappa_2-T)/U\) for almost every \(z\). When \(T>\kappa_1+\kappa_2\), even the expected number of nonempty levels is summable, proving emptiness almost surely.

For the matching lower bound assume \(K\ll N\) and \(\lambda=T-\kappa_2<k\). Take an integer block of \(P\asymp_I N\) starting indices \(a\) covering a fixed compact parameter interval and having length a multiple of \(K\). Let \(J_n=\lceil Q^{\lambda+\epsilon}\rceil\), with \(0<\epsilon<\kappa_1-\lambda\). For uniform \(a\) in the block and uniform \(z\), count
\[
 Z(a,z)=\sum_{j=1}^{J_n}
 1_{\{\|\Phi(a+j)-z\|<\delta_0\}},
 \qquad \Phi(a)=C(a+y_1)^2/K,\qquad \delta_0=c_I MR\asymp Q^{-\lambda}.
\]
The mean is \(2\delta_0 J_n\). For lag \(h\ne0\), after integrating out \(z\), the pair contribution is the periodic triangular overlap of two \(\delta_0\)-intervals evaluated at \(\Phi(a+j+h)-\Phi(a+j)\). The difference is linear in \(a\) and runs through a translated grid of spacing \(\gcd(2h,K)/K\). The overlap function has mean \(4\delta_0^2\) and total variation \(O(\delta_0)\), so its grid average differs from its mean by \(O(\delta_0\gcd(2h,K)/K)\). The diagonal contribution is \(O(\delta_0 J_n)\). Since \(\sum_{h\le J_n}\gcd(2h,K)\le 2J_n\,\mathrm d(K)\) by the divisor sum for the gcd,
\[
 \operatorname{Var} Z\ll
 \delta_0 J_n+\delta_0 J_n^2\,\mathrm d(K)/K,\qquad
 \mathbb P(Z=0)\ll(\delta_0 J_n)^{-1}+\mathrm d(K)/(\delta_0 K).
\]
Both terms are summable in \(n\) because \(K\) has fixed prime support, \(k>\lambda\), and \(\epsilon>0\). Under uniform starting parameter \(x\) in a compact interval, the probability that the block of \(J_n\) first grid centers after \(x\) misses is bounded by a constant times the same expression, by partition into first-grid cells and by the bounded ratio \(P/N\). Fubini and Borel–Cantelli give, for almost every \(z\), a hit of the inner test within \(O(J_n/N)\) of almost every \(x\) at every sufficiently late level. Moving to the narrower center adds \(O(R)=o(J_n/N)\). For any \(s<(\kappa_1-\lambda)/U\) choose \(\epsilon\) sufficiently small that the \(s\)-inflated inner balls cover those hits. Apply mass transference on a countable basis of parameter intervals. This proves the lower bound. The variance is uniform in \(y_1\), so a prescribed sequence \(y_{1,n}\) is also allowed. A prescribed additional translation of \(z\) at each level leaves the integrated bounds unchanged. In one base \(K=N=q\). If \(y_1\) is rational and \(\lambda>k\), almost every \(z\) gives an empty section, since all \(\Phi(a)\) lie on a circle grid of denominator \(O(K)\), and its \(\delta\)-neighborhood has summable measure.

**Metric endpoint for rational first target.** Suppose \(K\ll N\) and \(\lambda=k>0\), so \(\delta\asymp 1/K\). Write \(y_1=u/d\) in lowest terms and \(A_0=da+u\). Choose one fixed arithmetic progression of \(a\) on which \(A_0\) is coprime to \(K\). This is possible uniformly in the level by avoiding one residue at every radix prime not dividing \(d\). The phases are \(C A_0^2/(d^2K)\bmod1\). In any block of length \(O(K)\), a given phase has \(O(1)\) representatives by the unit square root bound modulo \(K\). Distinct phases are separated by at least \(1/(d^2K)\). On the fixed progression the quadratic leading coefficient is \(C m_0^2/K\), where \(m_0\) is the fixed progression step. Completion and the proof of §2 give discrepancy \(O(\sqrt K\log^2(2K))\) in counts on any block of \(O(K)\) indices, because \((C,K)=1\) and \(m_0\) is fixed.

If \(K\asymp N\), use the indices with first centers in a fixed interior subinterval of a parameter test interval \(I\). Every fixed target interval \(V\) then contains \(\gg_I |V|K\) distinct phases from those indices for all sufficiently large \(n\), using the middle of \(V\) to leave room for perturbations. Each such phase gives a \(z\)-interval of length \(\gg_I 1/K\) inside \(V\) supporting an interior overlap. Those intervals have bounded multiplicity, by the phase spacing. Therefore in every \(V\), the measure of the target event that some parameter in \(I\) hits at level \(n\) is at least \(c_I |V|\) for all sufficiently large \(n\). This bound passes to the decreasing tail unions and to their intersection. Lebesgue density shows that the intersection is full measure. Using countably many \(I\), for almost every \(z\) the unions of parameter hits beyond each time are open dense. The section is a dense \(G_\delta\), and the expected-cover upper bound gives dimension zero.

If \(k<\kappa_1\), use an index block of length \(d^2K\), which is a period of \(\Phi\). The same proportion argument gives full Haar measure of targets passing the inner test at infinitely many levels. Each accepted phase repeats across a first-coordinate mesh of spacing \(d^2K/N\). In any fixed parameter interval the accepted centers, with at most \(O(R)\) displacement, yield inner balls of radius \(\asymp Q^{-U}\). Mass transference gives dimension \((\kappa_1-k)/U\), matching the expected-cover upper bound. The phase comparison works for strict right-sided windows as well. If \(r_2\ge r_1\), choose \(z\) in a short interval below the phase at signed distance comparable to \(Mr_2\) and displace \(x\) a sufficiently small fixed multiple of \(r_1\) to the right. If \(r_1\ge r_2\), choose \(z\) in a short interval above the phase with signed distance between \(c_I Mr_1\) and \(2c_I Mr_1\) for sufficiently small \(c_I>0\). The second-coordinate center is then strictly inside the first window, and a small displacement of order \(r_2\) places the parameter inside both. These choices give intervals of target phases independent of the first-grid index in the local parameter interval, so they preserve the repetition argument.

For every pair of radices, there is a residual set of target pairs whose sections are dense \(G_\delta\) even for arbitrary prescribed positive shrinking widths. On any fixed positive open interval \(J\), the distributions of \((Nx,Mx^2)\bmod1\) for uniform \(x\) converge weakly to Haar measure on the torus. For a fixed character with nonzero quadratic coefficient, the continuous second-derivative estimate gives \(O(M^{-1/2})\). For a nonconstant linear character, integration gives \(O(N^{-1})\). Thus every open product of a parameter interval and a target neighborhood meets some hit set beyond any fixed level, and the Kuratowski–Ulam theorem applies to the intersection of those open dense unions. In one base the same conclusion holds for a residual set of second targets for each fixed first target, using the completed Gauss estimate at fixed test widths on the first grid. For strictly right-sided windows one can displace a center into the first window and take the second target slightly below the image, preserving the test neighborhood. In particular Haar-almost-everywhere emptiness at fast rates is compatible with residual occupancy at the same rates.

## 5. Veronese extension and its endpoint

Consider \((x,x^2,\ldots,x^d)\), one base \(q=B^n\), rational targets, and physical radii \(\asymp q^{-1-\tau_j}\). Put \(\tau=\min_j\tau_j\), \(\sigma=\max_j\tau_j\). If \(\tau>1\), or if \(\tau=1\) and \(d\ge3\), the local dimension is \(1/[d(1+\sigma)]\) if infinitely many levels have exactly compatible centers, and the limsup is empty otherwise. Zero target is compatible at every level.

Let \(d_0\) clear the target denominators, \(A_0=d_0q\), \(A_j=d_0(a_j+y_j)\). Every hit on a compact \(I\) gives
\[
 A_j=d_0q x^j+O_I(q^{-\tau}),\qquad
 \Delta_{jk}=A_j A_{k+1}-A_{j+1}A_k\quad(0\le j<k<d).
\]
All the minors are integers of size \(O_I(q^{1-\tau})\). For \(\tau>1\) they vanish at all late hits. When they vanish, the two rows have rank one and \(A_j/A_0=(A_1/A_0)^j\), giving an exact shifted curve center. At \(\tau=1\), if a fixed parameter had infinitely many hits with nonzero minors, pass to a fixed array of bounded integer minors with a nonzero entry. For \(d\ge3\) one can select three distinct columns containing that entry. The three-column identity gives, after division by \(d_0q\) and taking a limit, a nonzero polynomial with the three distinct monomials \(x^j,x^k,x^\ell\) as its possible terms. Thus \(x\) would be algebraic. An algebraic irrational \(x\) cannot have the first-coordinate approximations \(O(q^{-2})\) with rational denominators dividing \(d_0q\), by Ridout. If \(x\) is rational, its fractional errors, when nonzero, are bounded below by a fixed positive constant. Its sufficiently late hits are exact. This proves that at the critical endpoint each limsup point has eventually rank-one hits along its own sequence. Uniform late exactness on a compact interval is unnecessary.

Exactly compatible centers lie on a mesh of denominator \(D'=\prod_p p^{\lfloor\nu_p(d_0q)/d\rfloor}\asymp q^{1/d}\), since the reduced denominator to the \(d\)-th power divides \(d_0q\). If \(h/D'\) is exact, the full translate \((h+d_0j)/D'\), \(j\in\mathbb Z\), is exact in all coordinates by expanding the powers and using \((D')^j\mid d_0q\) for \(j\le d\). The upper cover and mesh lower bound now give the formula, also for right-sided windows. The same mesh argument works with a separate radix denominator \(N_j\) for each coordinate when rational forcing holds: take \(D'=\prod_p p^{\min_j\lfloor\nu_p(d_0N_j)/j\rfloor}\). Sufficient for forcing is \(K_j N_j\max(r_1,r_j)\to0\) for all \(j\ge2\), with \(K_j=N_1^j/\gcd(N_1^j,N_j)\), by clearing the fixed target denominators in \(N_j((a_1+y_1)/N_1)^j-(a_j+y_j)\). [Ridout](https://doi.org/10.1112/S0025579300001182)

## Literature and unresolved ranges

- Huang's Theorem 4 bounds the homogeneous fixed-denominator count by \(\ll_\epsilon\delta q+r_q^{1+\epsilon}+\delta^{1/2}q^{11/16+\epsilon}\), where \(r_q\) is the largest square-root divisor of \(q\). Huang–Li's Theorem 4 gives \(\ll \delta q(\log q)\mathrm d(q)+\sigma_1(r_q)\), with \(\sigma_1\) the sum of divisors. Both suffice for the one-base high-exponent upper bound. Huang–Li's Theorem 2 also gives the homogeneous macroscopic asymptotic in the slow range at fixed radix. The elementary fixed-prime congruence estimate in §3 improves the bound in this setting to \(O(\delta q+r_q)\) and applies to rational translations. Huang's Theorem 2 is a convergence result, and its §5 square-root character-sum bound is posed as a conjectural input related to Dirichlet GRH. Huang–Li's Theorem 5 uses GRH to improve a logarithmic factor in their count, which has no effect on the power-law dimension here. [Huang, Theorems 2 and 4, and §5](https://arxiv.org/pdf/1802.00525) · [Huang–Li, Theorems 2, 4 and 5](https://arxiv.org/pdf/1902.06047)
- The classical planar-curve dimension results aggregate over unrestricted denominators. The fast Veronese result for unrestricted \(q\) uses the same exact-curve principle, with a different rational-center count and therefore a different dimension. Neither their lower bounds nor the more recent unrestricted Veronese spectra imply the radix-power formulas. [Beresnevich–Dickinson–Velani and Vaughan](https://annals.math.princeton.edu/2007/166-2/p03) · [Schleischitz, Theorem 2.1 and Corollary 2.2](https://arxiv.org/pdf/1503.01622) · [Badziahin](https://doi.org/10.1016/j.aim.2025.110213) · [Badziahin–Shulga, recent preprint](https://arxiv.org/abs/2608.25335)
- LLVZ §5.5, Problem 2 asks for a Hausdorff theory on a submanifold. Its printed Eq. (75) has an explicit curved counterexample. Take the bi-Lipschitz \(f(x)=x^2+2x\) on \([0,1]\), using that the paper permits real-valued \(f\). Setting \(z=x+1\) identifies the torus target tests with those for \((z,z^2)\) on \([1,2]\), since the changes in both coordinates are integers. Use bases \(2,6\), zero target and common fractional radius \(\psi(n)=e^{-\lambda n}\), where \(\lambda=\log 6-(\log 2)/4\). Here \(K=2^n\), \(d_*=(\log 2)/2\), \(U=\log 6+\lambda\), and \(T-\kappa_2=3(\log 2)/4\). The high-range formula gives \((\log 2)/(2U)\). The published upper bound is \((\log 6-\lambda)/U=(\log 2)/(4U)\). This is a local application with distinct eigenvalues and \(\lambda\) strictly inside the printed range. The line paper already has counterexamples on the diagonal. [LLVZ, published p. 67, Problem 2 and Eq. (75)](https://eprints.whiterose.ac.uk/id/eprint/217139/1/1-s2.0-S0001870823001378-main.pdf#page=68)
- The all-target lower bound in §2 leaves a one-base gap for \(\sqrt2-1<\tau<1/2\) at equal exponents. Middle-rate coprime two-base counts with \(K=N^2\) also remain open in this analysis, as does the general fixed translated-target classification above the one-base high-exponent threshold. The line paper's weighted partition uses linear algebraic relations, while the modular square count and variance here use curvature. The primary-source audit establishes these comparisons within the sources cited above.

## GRH prefix gate

The existing prime-prefix crossing argument needs many primes in intervals of length \(X^\theta\), and tests a full prefix on blocks of length \(Q\asymp\log X\). RH alone gives \(\pi(x)=\operatorname{li}(x)+O(\sqrt x\log x)\), which supplies many primes for every fixed \(\theta>1/2\). Substituting it in that argument increases the retained digit fraction to any fixed fraction below \(1/2\). RH also gives the sharper maximum-gap scale \(O(\sqrt x\log x)\) through a separate theorem, still far above \(Q\). That is the small conditional gain the gate was meant to reject. [Schoenfeld, Corollary 1](https://doi.org/10.1090/S0025-5718-1976-0457374-X) · [Carneiro–Milinovich–Soundararajan, Theorem 1.3](https://doi.org/10.4171/cmh/467)

Hooley's asymptotic for primes with primitive root \(2\) assumes GRH for Dedekind zeta functions of Kummer fields and controls counts, even though \(\operatorname{ord}_p(2)=p-1\) on that set. That identity and the asymptotic do not give the needed index-dependent digit phase at inverse-index precision. A recent OpenAI preprint claims an unconditional dyadic lower bound for the infinitude assertion. The gate relies on neither that claim nor a claim about its proof status. The conditional least-prime-in-progression estimates use Dirichlet GRH and prescribe a residue class without aligning the leading digits with the prime's rank. Finally the RH error \(O(\sqrt{x}\log^2 x)\) in the Chebyshev functions is insufficient to substitute their main terms into the \(\log_b P_n\) and \(\log_b\operatorname{lcm}(1,\ldots,n)\) prefix phases at full-index tolerance. These inputs did not yield a compelling new conditional prefix theorem. [Hooley](https://doi.org/10.1515/crll.1967.225.209) · [OpenAI preprint](https://github.com/openai/math/tree/main/preprints/Primitive-roots-for-every-admissible-integer-base-October-4-2026) · [Lamzouri–Li–Soundararajan](https://arxiv.org/abs/1309.3595) · [Schoenfeld, Theorem 10](https://doi.org/10.1090/S0025-5718-1976-0457374-X)
